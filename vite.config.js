import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 10000, // Adjust the limit to your desired value in kBs
  },
  base: "/Web_portal"
})
