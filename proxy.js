import http from 'http';
import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer({});

proxy.on('error', (err, req, res) => {
  console.error('Proxy error:', err);

  if (!res.headersSent) {
    res.writeHead(502, { 'Content-Type': 'text/plain' });
  }
  res.end('Bad gateway.');
});

const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: 'http://127.0.0.1:3000' });
});
const server1 = http.createServer((req, res) => {
  proxy.web(req, res, { target: 'http://127.0.0.1:3333' });
});


server.listen(8000, () => {
  console.log('Proxy server listening on port 8000');
});
server1.listen(8333, () => {
  console.log('Proxy server listening on port 8333');
});
