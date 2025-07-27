# Basely

A JavaScript library for generating images from React components via HTTP requests.

## Installation

```bash
npm install basely
```

## Usage

### Node.js

```javascript
import basely from 'basely';

// Generate a baseline image
const response = await basely.img.baseline("Node.js Support");
const imageBuffer = await response.arrayBuffer();

// Render a component with props
const response = await basely.img(
  "@xyd-js/components/system",
  {
    import: "Baseline",
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
);
```

### Browser

```html
<script type="module">
  import basely from 'basely';

  // Generate a baseline image
  const response = await basely.img.baseline("Node.js Support");
  
  // Render a component
  const response = await basely.img(
    "@xyd-js/components/system",
    {
      import: "Baseline",
      props: { title: "Test" }
    }
  );
</script>
```

## API

### `basely.img(pkg, options)`

Renders a component from a package.

- `pkg` (string): The package name or URL
- `options` (object):
  - `import` (string): The component to import from the package
  - `props` (object, optional): Props to pass to the component

### `basely.img.baseline(title, data?)`

Generates a baseline image.

- `title` (string): The title for the baseline image
- `data` (array, optional): Tool groups data

### `basely.img.render(pkg, options)`

Direct access to the render method (same as `basely.img()`).

## Configuration

The library uses the following environment variables:

- `SERVER_URL`: The server URL (default: `http://localhost:3344`)
- `IMPORT_URL`: The import URL for packages (default: `http://localhost:3344`)

## Development

### Running Tests

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run

# Run tests with UI
npm run test:ui
```

### Building

```bash
npm run build
```

## Demo

Open `demo.html` in a browser to see the library in action.

## License

MIT 