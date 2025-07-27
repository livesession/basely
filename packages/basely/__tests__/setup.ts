import { vi } from 'vitest'

// Mock fetch for tests
// global.fetch = vi.fn()

// Mock environment variables
process.env.SERVER_URL = 'http://localhost:3000'
process.env.IMPORT_URL = 'http://localhost:3344'

// Uncomment the line below if you want to see console.log output in tests
// console.log = vi.fn() 