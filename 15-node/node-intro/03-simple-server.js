const http = require('http'); // Node standard library.

// request, response
http.createServer((req, res) => {
  console.log(`Serving request: ${ req.method } ${ req.url }`); // El cheapo logging.
  // Terribly tedious:
  if (req.url === '/groucho') {
    res.end('Hello from Groucho');
  } else if (req.url === '/harpo') {
    res.end('Hello from Harpo');
  } else {
    res.end('Hello from nobody in particular'); // Catch all
  }
}).listen(1337); // Elite

console.log('Server is running at http://localhost:1337');
