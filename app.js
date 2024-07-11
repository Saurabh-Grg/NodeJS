// // server.mjs
// // import { createServer } from 'node:http';

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello Bhumika World!\n');
// });

// // starts a simple http server locally on port 3000
// server.listen(3000, '127.0.0.1', () => {
//   console.log('Listening on 127.0.0.1:3000');
// });

// // run with `node server.mjs`



// server.mjs
// import { createServer } from "node:http";

// server.mjs
// import { createServer } from "node:http";





const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);

  if (req.url === "/watch" && req.method == "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Registration Form</title>
      </head>
      <body>
        <h1>Register</h1>
        <form action="/register" method="POST">
          <label for="username">Username:</label><br>
          <input type="text" id="username" name="username"><br><br>
          <label for="email">Email:</label><br>
          <input type="email" id="email" name="email"><br><br>
          <label for="password">Password:</label><br>
          <input type="password" id="password" name="password"><br><br>
          <input type="submit" value="Register">
        </form>
      </body>
    </html>
`);
return;
  }

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!\n");
});

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});

// run with `node server.mjs`











// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   console.log(req.method);

//   if (req.url === "/watch" && req.method === "GET") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(`<!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Registration Form</title>
//   </head>
//   <body>
//     <h1>Register</h1>
//     <form action="/register" method="POST">
//       <label for="username">Username:</label><br>
//       <input type="text" id="username" name="username"><br><br>
//       <label for="email">Email:</label><br>
//       <input type="email" id="email" name="email"><br><br>
//       <label for="password">Password:</label><br>
//       <input type="password" id="password" name="password"><br><br>
//       <input type="submit" value="Register">
//     </form>
//   </body>
// </html>
// `);
//     return;
//   }

//   if (req.url === "/register" && req.method === "POST") {
//     let body = '';
//     req.on('data', chunk => {
//       body += chunk.toString();
//     });
//     req.on('end', () => {
//       console.log('Form Data:', body);
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.end("Registration successful!\n");
//     });
//     return;
//   }

//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello World!\n");
// });

// // Starts a simple HTTP server locally on port 3000
// server.listen(3000, "127.0.0.1", () => {
//   console.log("Listening on 127.0.0.1:3000");
// });