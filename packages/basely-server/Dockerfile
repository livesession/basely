# Dockerfile
FROM oven/bun:1-debian

ENV NODE_ENV=production PORT=3000

# Puppeteer deps (kept before app copy for better layer caching)
RUN apt-get update && apt-get install -y \
    ca-certificates fonts-liberation libasound2 libatk1.0-0 libcups2 \
    libdbus-1-3 libdrm2 libgtk-3-0 libnss3 libx11-6 libx11-xcb1 \
    libxcomposite1 libxdamage1 libxext6 libxfixes3 libxrandr2 libxss1 \
    libxtst6 lsb-release xdg-utils wget \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy manifests (lockfile optional)
COPY package.json ./
COPY bun.lockb* ./

# If lockfile exists, use it; otherwise do a normal install
RUN if [ -f bun.lockb ]; then bun install --frozen-lockfile; else bun install; fi

# Copy the rest and build
COPY . .
RUN bun build server.tsx --outdir=dist --minify --target=bun

EXPOSE 3000
CMD ["bun", "./dist/server.js"]
