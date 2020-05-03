const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

  // control for favicon
  if (req.url === '/favicon.ico') {
    res.end();
    return;
  } else {

    // recupère la partie de l'URL situé après le nom de l'hôte
    const url = new URL(req.url, `http://${req.headers.host}`);

    // récupère la query
    const searchParams = url.searchParams;

    // lit le fichier index.html de manière asynchrone
    fs.readFile('index.html', 'utf-8', (err, data) => {

      if (err) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html; charset=utf8');
        res.end('fichier non trouvé');

      }

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf8');
      res.write(data);
      res.end(`${searchParams.get('name')}`);

    });
  }

});

server.listen(8080);