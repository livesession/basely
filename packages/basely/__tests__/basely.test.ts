import { describe, it, expect, vi, beforeEach } from 'vitest'
import { expectResponseToMatchFixture } from './utils'

import basely from '../index'

describe('Basely', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('basely.img()', () => {
    it('should call render with correct parameters', async () => {
      const result = await basely.img(
        "@basely/components",
        {
          import: "Baseline",
          font: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
          css: [
            `
            html {
                font-family: "Inter", sans-serif;
                font-optical-sizing: auto;
                font-weight: 400;
                font-style: normal;
            } 
            `,
            `${import.meta.env.IMPORT_URL}/@basely/components/dist/index.css`,
          ],
          props: {
            "title": "Node.js Support",
            "toolGroups": [
              [
                { "tool": "bun", "supported": 0 },
                { "tool": "pnpm", "supported": 0 },
                { "tool": "npm", "supported": 0 }
              ]
            ]
          }
        }
      )

      expect(result.status).toBe(200)
      expect(result.headers.get("Content-Type")).toBe("image/png")
      expect(result.body).toBeDefined()

      await expectResponseToMatchFixture(result, './__fixtures__/baseline.png')
    })
  })

  describe('basely.img.baseline()', () => {
    it('should call baseline with correct parameters', async () => {
      const result = await basely.img.baseline(
        "Node.js Support",
        [
          [
            { "tool": "bun", "supported": true },
            { "tool": "pnpm", "supported": true },
            { "tool": "npm", "supported": true }
          ]
        ]
      )

      expect(result.status).toBe(200)
      expect(result.headers.get("Content-Type")).toBe("image/png")
      expect(result.body).toBeDefined()

      await expectResponseToMatchFixture(result, './__fixtures__/baseline.png')
    })
  })
})