// MIME type mapping
const mimeTypes: Record<string, string> = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject',
};

function getMimeType(pathname: string): string {
    const ext = pathname.substring(pathname.lastIndexOf('.'));
    return mimeTypes[ext] || 'application/octet-stream';
}

export async function serveStatic(url: URL) {
    // Serve static files from public folder
    if (url.pathname.startsWith('/')) {
        const filePath = `./public${url.pathname}`;
        const file = Bun.file(filePath);

        if (await file.exists()) {
            const mimeType = getMimeType(url.pathname);
            return new Response(file, {
                headers: {
                    'Content-Type': mimeType,
                    'Cache-Control': 'public, max-age=31536000', // Cache for 1 year
                },
            });
        }
    }
}