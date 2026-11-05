import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import opentype from 'opentype.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

const fontPath = path.join(rootDir, 'syne.ttf')
if (!fs.existsSync(fontPath)) {
  console.error('syne.ttf not found!')
  process.exit(1)
}

const font = opentype.parse(fs.readFileSync(fontPath).buffer)

// Dimensions & Sizing
// We want "BA" to look bold, clean, and recognizable at 16x16 / 32x32
const fontSize = 44
const pB = font.getPath('B', 0, 0, fontSize)
const bbB = pB.getBoundingBox()
const widthB = bbB.x2 - bbB.x1

const pA = font.getPath('A', 0, 0, fontSize)
const bbA = pA.getBoundingBox()
const widthA = bbA.x2 - bbA.x1
const height = bbA.y2 - bbA.y1 // cap height ~28.1px

const letterGap = 1.5
const dotRadius = 4.2
const dotGap = 5.5
const totalWidth = widthB + letterGap + widthA + dotGap + (dotRadius * 2)

// Horizontal & Vertical centering inside 128x128
const startX = (128 - totalWidth) / 2
const baselineY = (128 + height) / 2 - 1

// Construct path for B
const xB = startX - bbB.x1
const pathB = font.getPath('B', xB, baselineY, fontSize)

// Construct path for A
const xA = xB + bbB.x2 + letterGap - bbA.x1
const pathA = font.getPath('A', xA, baselineY, fontSize)

// Combined path data
const pathData = `${pathB.toPathData(2)} ${pathA.toPathData(2)}`

// Dot coordinates: vertically centered with the text cap-height
const dotX = xA + bbA.x2 + dotGap + dotRadius
const dotY = baselineY - (height / 2)

console.log(`Generated Syne vector: totalWidth=${totalWidth.toFixed(1)}, height=${height.toFixed(1)}, startX=${startX.toFixed(1)}, dotX=${dotX.toFixed(1)}`)

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%">
  <defs>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#22d3ee" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>
    <filter id="beaconGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <!-- Dark Obsidian Squircle matching site background #030508 / #070a13 -->
  <rect x="3" y="3" width="122" height="122" rx="34" fill="#070a13" stroke="rgba(34, 211, 238, 0.3)" stroke-width="2" />
  <rect x="5.5" y="5.5" width="117" height="117" rx="31.5" fill="none" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1" />

  <!-- Exact Syne 800/900 Vector Glyphs for BA -->
  <path d="${pathData}" fill="url(#cyanGrad)" />

  <!-- Cyan Beacon Dot (vertically centered, matching navbar logo) -->
  <circle cx="${dotX.toFixed(1)}" cy="${dotY.toFixed(1)}" r="${dotRadius}" fill="#22d3ee" filter="url(#beaconGlow)" />
</svg>
`

fs.writeFileSync(path.join(rootDir, 'public', 'favicon.svg'), svg)
fs.writeFileSync(path.join(rootDir, 'favicon.svg'), svg)
console.log('✅ favicon.svg updated in public/ and root!')
