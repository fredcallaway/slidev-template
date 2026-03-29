#!/usr/bin/env bun

import { execSync } from "child_process"
import { readFileSync, writeFileSync, existsSync } from "fs"

const TITLE_STOP_WORDS = new Set([
  "a",
  "an",
  "the",
  "and",
  "or",
  "but",
  "in",
  "on",
  "at",
  "to",
  "for",
  "of",
  "as",
  "by",
  "with",
  "from",
])

function slugBuildSegment(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .replace(/_/g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
}

function firstSignificantTitleWord(title: string): string {
  const words = title
    .toLowerCase()
    .split(/[\s–—]+/)
    .map((w) => w.replace(/[^a-z0-9']/g, ""))
    .filter(Boolean)
  for (const w of words) {
    const core = w.replace(/'/g, "")
    if (!TITLE_STOP_WORDS.has(core)) return core
  }
  return words[0]?.replace(/'/g, "") || "update"
}

function getBuildName(
  src: string,
  meta: { buildName: string | null; title: string | null }
): string {
  if (meta.buildName) {
    return slugBuildSegment(meta.buildName)
  }
  const base = src.split(/[/\\]/).pop() || ""
  if (base !== "slides.md") {
    const stem = base.replace(/\.md$/i, "")
    return slugBuildSegment(stem)
  }
  if (meta.title) {
    return slugBuildSegment(firstSignificantTitleWord(meta.title))
  }
  throw new Error(`No build name found for ${src}`)
}

function extractMetadataFromFile(filePath: string) {
  const content = readFileSync(filePath, "utf-8")

  // Extract frontmatter
  const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/)
  let date: string | null = null
  let title: string | null = null
  let buildName: string | null = null

  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[1]
    const dateMatch = frontmatter.match(/^date:\s*(\d{4}-\d{2}-\d{2})$/m)
    if (dateMatch) {
      date = dateMatch[1].trim()
    }
    const titleMatch = frontmatter.match(/^title:\s*(.+)$/m)
    if (titleMatch) {
      title = titleMatch[1].trim().replace(/^["']|["']$/g, "")
    }
    const buildNameMatch = frontmatter.match(/^buildName:\s*(.+)$/m)
    if (buildNameMatch) {
      buildName = buildNameMatch[1].trim().replace(/^["']|["']$/g, "")
    }
  }
  if (!title) {
    const headingMatch = content.match(/^#\s+(.+)$/m)
    if (headingMatch) {
      title = headingMatch[1].trim()
    }
  }

  return { date, title, buildName }
}

async function main() {
  // Get command line arguments
  const args = process.argv.slice(2)
  const force = args.includes("--force")
  const filteredArgs = args.filter(arg => arg !== "--force")
  
  const src = filteredArgs[0] || "slides.md"

  const generationDateTime = new Date().toISOString()

  const { date: slidesDate, title, buildName } = extractMetadataFromFile(src)
  const name = getBuildName(src, { buildName, title })

  const dateString = slidesDate || new Date().toISOString().split("T")[0]
  
  const dest = `${dateString}-${name}`
  const infoPath = `site/${dest}/info.json`
  const today = new Date().toISOString().split("T")[0]

  // Check if destination already exists
  if (existsSync(infoPath)) {
    const existingInfo = JSON.parse(readFileSync(infoPath, "utf-8"))
    const existingDate = existingInfo.generationDateTime?.split("T")[0] || existingInfo.slidesDate
    
    if (existingDate !== today && !force) {
      throw new Error(
        `Destination ${dest} already exists and was generated on ${existingDate} (not today). ` +
        `Use --force to override.`
      )
    }
  }

  console.log(dest)

  execSync(`bun slidev build ${src} --base /${dest}/ -o site/${dest}/`, { stdio: "inherit" })
  
  // Prepend comment to index.html with source file information
  const indexPath = `site/${dest}/index.html`
  const htmlContent = readFileSync(indexPath, "utf-8")
  const comment = `<!-- Generated from: ${src} at ${generationDateTime} -->\n`
  const updatedContent = comment + htmlContent
  writeFileSync(indexPath, updatedContent, "utf-8")
  console.log(`Added source comment to ${indexPath}`)

  // Create info.json with all relevant metadata
  const info = {
    src,
    name,
    generationDateTime,
    slidesDate: slidesDate || dateString,
    title: title || null
  }

  writeFileSync(infoPath, JSON.stringify(info, null, 2), "utf-8")
  console.log(`Created ${infoPath}`)
}

main().catch(console.error)
