import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes the build work from any path (GitHub Pages user site or a project repo)
export default defineConfig({
  plugins: [react()],
  base: './',
})
