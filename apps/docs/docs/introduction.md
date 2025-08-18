---
title: Introduction
---

# Basely

:::subtitle
Content Creation Platform for Developers
:::

Basely is a free, open-source platform that helps developers create engaging visual content - from images and videos to dynamic assets that make developer processes more engaging.

## What you can build with Basely?

Basely transforms the way developers create and share content by providing tools to generate various media formats. You can build:

- **Create visual content** - Generate high-quality images, videos, and dynamic assets
- **Build engaging experiences** - Create badges, charts, status indicators, and visual elements
- **Enhance developer workflows** - Make documentation, dashboards, and reports more engaging
- **Use anywhere** - Works in Node.js, browsers, and serverless environments

## Architecture

Basely consists of two main components:

### Server
The **Basely Server** is a powerful API that renders components using Puppeteer. It:
- Accepts HTTP requests to generate images and videos
- Renders React components in a headless browser environment
- Returns high-quality media files
- Can be deployed independently or as part of the Basely ecosystem

### Client
The **Basely Client** is a JavaScript library that provides an interface for:
- Creating workflows and automation scripts
- Making API calls to the server under the hood
- Handling authentication and configuration
- Managing media generation requests

## Quick Start

### Installation

```bash
npm install basely
```

### Basic Usage

```javascript
import basely from 'basely';

// Render custom content
const response = await basely.img(
  "@xyd-js/components/system",
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

## Next Steps

- [Components](/docs/components/baseline) - Learn about the built-in Baseline component
- [API Reference](/docs/api-reference) - Explore the complete API documentation
