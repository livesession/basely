import { defineConfig } from 'vitest/config'
import dotenv from 'dotenv'

// Load env from .env and .env.local (if present)
dotenv.config()

console.log(process.env.IMPORT_URL)
export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    env: {
      IMPORT_URL: process.env.IMPORT_URL,
      SERVER_URL: process.env.SERVER_URL,
    },
  },
  define: {
    'import.meta.env.IMPORT_URL': JSON.stringify(process.env.IMPORT_URL),
    'import.meta.env.SERVER_URL': JSON.stringify(process.env.SERVER_URL),
  },
}) 