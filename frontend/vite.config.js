import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,           // ← allows access from Docker host
    port: 5173,
    strictPort: true
  }
})
