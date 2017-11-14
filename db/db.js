const r = require('rethinkdb');

module.exports = () => {
  return r.connect({host: '127.0.0.1', port: 28015, db: 'cauzzo'});
};
