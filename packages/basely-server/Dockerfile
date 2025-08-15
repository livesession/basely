# Dockerfile
FROM oven/bun:1-debian
ENV NODE_ENV=production PORT=3000

# Chromium deps for Puppeteer
RUN apt-get update && apt-get install -y \
  ca-certificates fonts-liberation libasound2 libatk1.0-0 libcups2 \
  libdbus-1-3 libdrm2 libgtk-3-0 libnss3 libx11-6 libx11-xcb1 \
  libxcomposite1 libxdamage1 libxext6 libxfixes3 libxrandr2 libxss1 \
  libxtst6 lsb-release xdg-utils wget \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app
# Copy everything first so install works whether bun.lockb exists or not
COPY . .

RUN bun install --no-progress
# build for Bun runtime
RUN bun build server.tsx --outdir=dist --minify --target=bun

EXPOSE 8080
# IMPORTANT: your server should read process.env.PORT on platforms like Cloud Run
CMD ["bun","./dist/server.js"]
