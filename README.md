# Basely

[![npm version](https://img.shields.io/npm/v/basely.svg)](https://www.npmjs.com/package/basely)
[![npm version](https://img.shields.io/npm/v/basely.svg)](https://www.npmjs.com/package/@basely/components)
[![npm version](https://img.shields.io/npm/v/basely.svg)](https://www.npmjs.com/package/@basely/server)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A free, open-source platform that helps developers create engaging visual content - from images and videos to dynamic assets that make developer processes more engaging.

## 🚀 What is Basely?

Basely transforms the way developers create and share content by providing tools to generate various media formats directly from React components. Whether you need to create badges, charts, status indicators, or any visual element, Basely makes it simple and efficient.

### ✨ What you can build with Basely

- **Create visual content** - Generate high-quality images, videos, and dynamic assets directly from components
- **Build engaging experiences** - Create badges, charts, status indicators, and visual elements
- **Enhance developer workflows** - Make documentation, dashboards, and reports more engaging
- **Use anywhere** - Works in Node.js, browsers, and serverless environments

## 🏗️ Architecture

Basely consists of three main packages:

### 📦 `basely` - Client Library
The main JavaScript library that provides a simple API for generating images and videos.

```bash
npm install basely
```

### 🖥️ `@basely/server` - Rendering Server
A powerful API server that renders React components using Puppeteer in a headless browser environment.

### 🧩 `@basely/components` - Component Library
A collection of pre-built React components for common use cases like baseline images, badges, and charts.

## 🚀 Quick Start

### Installation

```bash
npm install basely
```

### Basic Usage

```javascript
import basely from 'basely';

// Generate a baseline image
const response = await basely.img.baseline(
  "Node.js Support",
  [
    [
      { "tool": "bun", "supported": true },
      { "tool": "pnpm", "supported": true },
      { "tool": "npm", "supported": true }
    ]
  ]
)

--

// Render a custom component
const response = await basely.img(
  "@basely/components",
  {
    import: "Baseline",
    props: {
      title: "Node.js Support",
      toolGroups: [
        [
          { tool: "bun", supported: true },
          { tool: "pnpm", supported: true },
          { tool: "npm", supported: false }
        ]
      ]
    }
  }
);
```

## 🌐 Server Configuration

The Basely server can be configured using environment variables:

- `SERVER_URL`: The server URL (default: `http://localhost:3000`)
- `IMPORT_URL`: The import URL for packages (default: `http://localhost:3344`)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by the [LiveSession team](https://github.com/livesession)
