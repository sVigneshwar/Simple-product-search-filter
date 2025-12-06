import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Simple-product-search-filter/", // Add your repository name here with leading/trailing slashes
})
