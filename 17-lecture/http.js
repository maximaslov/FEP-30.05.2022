// Request:
// telnet localhost 8000
// GET /nested-dir/index.html HTTP/1.1
// Host: localhost

// telnet localhost 5500
// GET /17-lecture/index.html HTTP/1.1
// Host: localhost



// Response:
// HTTP/1.0 200 OK
// Server: SimpleHTTP/0.6 Python/3.9.7
// Date: Mon, 25 Jul 2022 16:41:19 GMT
// Content-type: text/html
// Content-Length: 159
// Last-Modified: Mon, 25 Jul 2022 14:39:13 GMT

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <script defer src="./script.js"></script>
// </head>
// <body>
//   <h1>HTTP</h1>
// </body>
// </html>Connection closed by foreign host.


// - GET
// - DELETE
// - POST
// - PUT
// - PATCH
// - OPTIONS (готов ли сервер наш обслужить)