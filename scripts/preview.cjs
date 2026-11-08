const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname,'..');
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.ico':'image/x-icon'};
const server = http.createServer((request,response) => {
  let pathname;
  try {pathname = decodeURIComponent(new URL(request.url,'http://localhost').pathname);} catch {response.writeHead(400);response.end();return;}
  const file = path.resolve(root,'.'+(pathname === '/' ? '/index.html' : pathname));
  const relative = path.relative(root,file);
  if (relative.startsWith('..') || path.isAbsolute(relative) || relative.split(path.sep).some(segment => segment.startsWith('.')) || !['.html','.css','.js','.svg','.png','.webp','.ico'].includes(path.extname(file))) {response.writeHead(403);response.end('Forbidden');return;}
  fs.readFile(file,(error,data) => {
    if(error){response.writeHead(404);response.end('Not found');return;}
    response.writeHead(200,{'Content-Type':types[path.extname(file)] || 'application/octet-stream','Cache-Control':'no-cache'});response.end(data);
  });
});
server.listen(4173,'127.0.0.1',() => console.log('Local: http://127.0.0.1:4173'));
