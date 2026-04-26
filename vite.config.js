import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedhost: true,
    host: true,
    port: 5173,
    strictPort: true
  },
})
