#!/usr/bin/env node

import fs from "fs"
import path from "path"

const parseDate = (date: string): Date | null => {
  const match = date.match(/^(\d{4})-(\d{2})-(\d{2})$/)
  if (match) {
    const [, year, month, day] = match
    return new Date(Number(year), Number(month) - 1, Number(day))
  }
  return null
}

function readInfoFromVersion(versionPath: string) {
  const infoPath = path.join(versionPath, 'info.json')
  
  if (fs.existsSync(infoPath)) {
    const content = fs.readFileSync(infoPath, 'utf-8')
    return JSON.parse(content)
  }
  
  return null
}

const html = (strings: any, ...values: any) => {
  const result = strings.reduce((acc, str, i) => {
    return acc + str + (values[i] || '');
  }, '');
  
  // Find the minimum indentation level (excluding empty lines)
  const lines = result.split('\n');
  const minIndent = lines
    .filter(line => line.trim())
    .reduce((min, line) => {
      const indent = line.match(/^\s*/)[0].length;
      return Math.min(min, indent);
    }, Infinity);

  // Remove the common indentation from all lines
  return lines
    .map(line => line.slice(minIndent))
    .join('\n')
    .trim();
}

// Read versions from site directory
function readVersionsFromSite(): string[] {
  const siteDir = path.join(process.cwd(), 'site')
  
  if (!fs.existsSync(siteDir)) {
    return []
  }
  
  const entries = fs.readdirSync(siteDir, { withFileTypes: true })
  
  // Get all directories that match the date pattern (YYYY-MM-DD-*)
  return entries
    .filter(entry => entry.isDirectory() && entry.name.match(/^\d{4}-\d{2}-\d{2}-/))
    .map(entry => entry.name)
}


// Generate HTML content
function generateHTML(versions: string[]): string {
  // Sort versions by date (newest first)
  const sortedVersions = versions.sort((a, b) => {
    const dateA = a.match(/^(\d{4})-(\d{2})-(\d{2})/)
    const dateB = b.match(/^(\d{4})-(\d{2})-(\d{2})/)
    if (dateA && dateB) {
      return dateB[0].localeCompare(dateA[0])
    }
    return b.localeCompare(a)
  })

  const versionItems = sortedVersions
    .map((version) => {
      const versionPath = path.join(process.cwd(), 'site', version)
      const info = readInfoFromVersion(versionPath)
      
      if (!info) {
        throw new Error(`Missing info.json for version ${version}`)
      }
      
      const date = info.slidesDate ? parseDate(info.slidesDate) : null
      const title = info.title
      
      if (!date) {
        throw new Error(`No date found for version ${version}`)
      }
      
      if (!title) {
        throw new Error(`No title found for version ${version}`)
      }
      
      const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      return html`
        <li class="version-item">
          <a href="/${version}/" class="version-link">
            <div class="version-content">
              <div class="version-name">${title}</div>
              <div class="version-date">${formattedDate}</div>
            </div>
          </a>
        </li>
      `
    })
    .join("\n")

  return html`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>EyePlan Slides</title>
      <style>
        body {
          font-family: system-ui, -apple-system, sans-serif;
          max-width: 800px;
          margin: 50px auto;
          padding: 20px;
          line-height: 1.6;
          color: #333;
        }
        
        h1 {
          color: #2c3e50;
          border-bottom: 2px solid #3498db;
          padding-bottom: 10px;
        }
        
        .version-list {
          list-style: none;
          padding: 0;
        }
        
        .version-item {
          margin: 15px 0;
          background: #f8f9fa;
          border-radius: 8px;
          transition: background-color 0.2s ease;
        }
        
        .version-item:hover {
          background: #e9ecef;
        }
        
        .version-link {
          display: block;
          text-decoration: none;
          padding: 15px 20px;
          color: inherit;
        }
        
        .version-content {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        
        .version-name {
          color: #3498db;
          font-weight: 500;
          font-size: 18px;
        }
        
        .version-date {
          color: #666;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <h1>EyePlan Slides</h1>
      <ul class="version-list">
        ${versionItems}
      </ul>
    </body>
    </html>
  `
}

// Update Firebase rewrites configuration
function updateFirebaseRewrites(versions: string[]) {
  const firebasePath = path.join(process.cwd(), 'firebase.json')
  
  if (!fs.existsSync(firebasePath)) {
    console.log("No firebase.json found, skipping rewrites update")
    return
  }
  
  try {
    const firebaseConfig = JSON.parse(fs.readFileSync(firebasePath, 'utf-8'))
    
    // Generate rewrites for each version
    const rewrites = versions.map(version => ({
      source: `/${version}/**`,
      destination: `/${version}/index.html`
    }))
    
    // Update the rewrites in the config
    firebaseConfig.hosting.rewrites = rewrites
    
    // Write back to firebase.json
    fs.writeFileSync(firebasePath, JSON.stringify(firebaseConfig, null, 2))
    console.log("✅ Successfully updated firebase.json rewrites")
  } catch (error) {
    console.error("❌ Error updating firebase.json:", error.message)
    throw error
  }
}

// Generate index page by reading site directory and writing HTML
function generateIndexPage() {
  try {
    console.log("Reading versions from site/ directory...")
    
    const versions = readVersionsFromSite()
    
    if (versions.length === 0) {
      console.log("No version directories found in site/")
      return false
    }
    
    console.log(`Found ${versions.length} version(s):`, versions)
    console.log("Generating HTML...")
    
    const htmlContent = generateHTML(versions)
    const outputPath = path.join(process.cwd(), 'site', 'index.html')
    
    console.log(`Writing to ${outputPath}...`)
    fs.writeFileSync(outputPath, htmlContent)
    console.log("✅ Successfully generated site/index.html")

    // Update Firebase rewrites
    updateFirebaseRewrites(versions)
    
    return true
  } catch (error) {
    console.error("❌ Error generating index.html:", error.message)
    throw error
  }
}

// Run the script if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateIndexPage()
}

export { readVersionsFromSite, generateHTML, generateIndexPage }

