#!/usr/bin/env bun

import { execSync } from "child_process"
import { readFileSync, writeFileSync, existsSync } from "fs"

function extractMetadataFromFile(filePath: string) {
  const content = readFileSync(filePath, 'utf-8');

  // Extract frontmatter
  const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
  let date: string | null = null;

  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[1];
    const dateMatch = frontmatter.match(/^date:\s*(\d{4}-\d{2}-\d{2})$/m);
    if (dateMatch) {
      date = dateMatch[1].trim();
    }
  }

  // Extract title from first heading
  const titleMatch = content.match(/^#\s+(.+)$/m);
  let title: string | null = null;

  if (titleMatch) {
    title = titleMatch[1].trim();
  }

  return { date, title };
}

async function main() {
  // Get command line arguments
  const args = process.argv.slice(2)
  const force = args.includes("--force")
  const filteredArgs = args.filter(arg => arg !== "--force")
  
  const src = filteredArgs[0] || "slides.md"
  let name = filteredArgs[1] || src.replace(/\.md$/, "")
  if (name == "slides") {
    name = "update"
  }
  name = name.replace(/_/g, "-")
  
  const generationDateTime = new Date().toISOString()

  // Extract metadata from source file
  const { date: slidesDate, title } = extractMetadataFromFile(src)
  
  // Use provided date, extracted date, or current date
  const dateString = filteredArgs[2] || slidesDate || new Date().toISOString().split("T")[0]
  
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
