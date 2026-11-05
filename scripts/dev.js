import fs from 'fs'
import path from 'path'
import { spawn } from 'child_process'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

// Always ensure index.html points to /src/main.tsx in development
const templatePath = path.join(rootDir, 'template.html')
const indexPath = path.join(rootDir, 'index.html')

if (fs.existsSync(templatePath)) {
  fs.copyFileSync(templatePath, indexPath)
}

const isWindows = process.platform === 'win32'
const viteCmd = isWindows ? 'npx.cmd' : 'npx'
const child = spawn(viteCmd, ['vite'], { stdio: 'inherit', cwd: rootDir, shell: true })

child.on('exit', (code) => {
  process.exit(code || 0)
})
