const http = require('http')
  , express = require('express');

const app = express();
const server = http.createServer(app);

/* EXPRESS */
require('./app')(express, app);

server.listen(3000, () => 'server is running');

module.exports = server;
