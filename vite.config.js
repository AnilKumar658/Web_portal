import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
//build: {
//  rollupOptions: {
//    output: {
//      // ...other options
//      manualChunks(id) {
//        if (id.includes('my-custom-module')) {
//          return 'custom-chunk';
//        }
//    },
//    },
//  },
//},
  build: {
    chunkSizeWarningLimit: 10000, // Adjust the limit to your desired value in kBs
  }})
