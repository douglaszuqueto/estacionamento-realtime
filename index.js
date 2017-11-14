/* HTTP SERVER */
const server = require('./http');

/* IO */
const io = require('./io')(server);

/* SUBSCRIBER */
require('./subscribers/vagas')(io);
