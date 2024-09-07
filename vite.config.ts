import path from "path"
import react from "@vitejs/plugin-react"
import vercel from 'vite-plugin-vercel';
import { defineConfig } from "vite"
 
export default defineConfig({
  plugins: [react(), vercel()],
  server: {
    port: process.env.PORT as unknown as number,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})