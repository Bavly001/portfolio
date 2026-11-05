import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

console.log('🚀 Step 1: Restoring template for Vite build...')
fs.copyFileSync(path.join(rootDir, 'template.html'), path.join(rootDir, 'index.html'))

console.log('📦 Step 2: Compiling TypeScript and bundling with Vite...')
execSync('npx tsc -b && npx vite build', { stdio: 'inherit', cwd: rootDir })

console.log('✨ Step 3: Copying production assets to root for zero-config GitHub Pages...')
const distDir = path.join(rootDir, 'dist')

// Copy dist/index.html to root
fs.copyFileSync(path.join(distDir, 'index.html'), path.join(rootDir, 'index.html'))

// Copy dist/assets to root assets
const distAssets = path.join(distDir, 'assets')
const rootAssets = path.join(rootDir, 'assets')
if (fs.existsSync(rootAssets)) {
  fs.rmSync(rootAssets, { recursive: true, force: true })
}
fs.cpSync(distAssets, rootAssets, { recursive: true })

// Copy favicon, resume, etc. to root if present
const filesToCopy = ['favicon.svg', 'Bavly-Ashraf-Resume.pdf', 'resume.html']
for (const file of filesToCopy) {
  const src = path.join(distDir, file)
  const dest = path.join(rootDir, file)
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest)
  }
}

console.log('✅ Build complete! Root is fully ready for static GitHub Pages deployment with zero errors.')
