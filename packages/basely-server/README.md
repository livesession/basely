# Basely Image Generator

A dynamic image generator that creates baseline images based on URL parameters.

## Commands
```
bun run server.tsx 
```

## Usage

### Basic Usage
```
http://localhost:3000/baseline.png
```

### With Custom Title
```
http://localhost:3000/baseline.png?title=Custom%20Title
```

### With Custom Tool Groups
1.
```
http://localhost:3000/baseline.png?title=Node.js%20Support&toolGroups=[[{%22tool%22:%22bun%22,%22supported%22:true},{%22tool%22:%22pnpm%22,%22supported%22:true},%20{%22tool%22:%22npm%22,%22supported%22:true}]]
```

2.
http://localhost:3000/render?pkg=http://localhost:3344/@xyd-js/components/system&component=Baseline&props={"title":"Node.js Support","toolGroups":[[{"tool":"bun","supported":0},{"tool":"pnpm","supported":0},{"tool":"npm","supported":0}]]}

3.
```
http://localhost:3000/baseline.png?title=Node.js%20Support&toolGroups=%5B%5B%7B%22tool%22%3A%22bun%22%2C%22supported%22%3Atrue%7D%2C%7B%22tool%22%3A%22node%22%2C%22supported%22%3Atrue%2C%22label%22%3A%2220%22%7D%5D%5D
```

3. http://localhost:3000/baseline.png?file=<URL_TO_FILE>

The `toolGroups` parameter should be a URL-encoded JSON array. The above example decodes to:
```json
[
  [
    {"tool": "bun", "supported": true},
    {"tool": "node", "supported": true, "label": "20"}
  ]
]
```

### Tool Group Structure
Each tool group is an array of tool objects with the following properties:
- `tool`: string - The name of the tool (e.g., "bun", "node", "npm")
- `supported`: boolean - Whether the tool is supported
- `label`: string (optional) - Additional label for the tool (e.g., version number)

## URL Encoding Notes

- Use `%20` for spaces in the title
- Use `%22` for quotes in the JSON
- Use `%3A` for colons in the JSON
- Use `%5B` and `%5D` for square brackets
- Use `%7B` and `%7D` for curly braces
- Use `%2C` for commas

The server can handle both properly encoded URLs and some double-encoded URLs automatically.

## Running the Server
```bash
bun run start
```

The server will start on port 3000. 


