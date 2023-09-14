const http = require('node:http');
const chalk = require('chalk');

const host = 'localhost';
const port = 8000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  const data = JSON.stringify({
    name: "Fernando Luis Hoyos Hernandez",
    message: "Hola desde el servidor",
  });
  res.end(data);
});

server.listen(port, host, () => {
  console.log(chalk.green(`Server listen on http://${host}:${port}`));
});
