import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:[
      {find:'@', replacement: path.resolve(__dirname, "src")},
      { find: '@components', replacement: path.resolve(__dirname, "src/components/") },
      { find: '@services', replacement: path.resolve(__dirname, "src/services/") },
      { find: '@src/types', replacement: path.resolve(__dirname, "src/types/") },
      { find: '@hooks', replacement: path.resolve(__dirname, "src/hooks/") }  
  ]
  }
})
