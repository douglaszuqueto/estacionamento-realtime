const socketIO = require('socket.io');
const vagas = require('../db/vagas');

/* EVENTS */
const onConnect = (socket) => {
  console.log('User is connected ', socket.id);

  socket.on('disconnect', onDisconnect);
  socket.on('vagas.update', onUpdateVaga);
};

const onDisconnect = (socket) => console.log('User is disconnected...', socket);

const onUpdateVaga = async(payload) => {
  const id = payload.id;

  console.log(id);

  const vaga = await vagas.find(id);
  const state = !vaga.state;

  vagas.update(id, {state})
    .then((data) => null)
    .catch((err) => console.error(err));
};

module.exports = (server) => {
  const io = socketIO(server);

  io.on('connection', onConnect);

  return io;
};


