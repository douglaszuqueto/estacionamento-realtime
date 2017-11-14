const model = require('../db/vagas');

module.exports = (io) => {
  model.changes()
    .then((cursor) => {
      cursor.each((err, row) => {
        const message = row.new_val;
        io.sockets.emit('vagas.change', message);
        console.info(message);
      })
    })
    .catch((err) => console.error(err));
};
