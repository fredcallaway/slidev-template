#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function copyFigs() {
  const projectRoot = path.resolve(__dirname, '..');
  const distDir = path.join(projectRoot, 'dist');
  const distFigsDir = path.join(distDir, 'figs');
  
  console.log('🔍 Scanning for figure references...');
  
  // Find all markdown files
  const markdownFiles = await findMarkdownFiles(projectRoot);
  
  // Extract all fig references
  const figPaths = new Set();
  
  for (const mdFile of markdownFiles) {
    const content = await fs.readFile(mdFile, 'utf-8');
    const matches = content.matchAll(/(\.\/figs\/[^"]+)/g);
    
    for (const match of matches) {
      figPaths.add(match[1]);
    }
  }
  
  console.log(`📋 Found ${figPaths.size} figure references`);
  
  if (figPaths.size === 0) {
    console.log('✅ No figures to copy');
    return;
  }
  
  // Ensure dist/figs directory exists
  await fs.mkdir(distFigsDir, { recursive: true });
  
  // Copy each referenced figure
  let copiedCount = 0;
  for (const figPath of figPaths) {
    try {
      const sourcePath = path.join(projectRoot, figPath);
      const destPath = path.join(distDir, figPath);
      const destDir = path.dirname(destPath);
      
      // Create destination directory if it doesn't exist
      await fs.mkdir(destDir, { recursive: true });
      
      // Copy the file
      await fs.copyFile(sourcePath, destPath);
      copiedCount++;
      console.log(`📁 Copied: ${figPath}`);
    } catch (error) {
      console.error(`❌ Failed to copy ${figPath}:`, error.message);
    }
  }
  
  console.log(`✅ Successfully copied ${copiedCount} figures to dist/`);
}

async function findMarkdownFiles(dir) {
  const files = [];
  
  async function walk(currentDir) {
    const entries = await fs.readdir(currentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      
      if (entry.isDirectory() && !['node_modules', 'dist', '.git'].includes(entry.name)) {
        await walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        files.push(fullPath);
      }
    }
  }
  
  await walk(dir);
  return files;
}

// Run the script
copyFigs().catch(console.error); 