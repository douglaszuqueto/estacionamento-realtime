const r = require('rethinkdb');

const getConn = require('./db');

module.exports = (TABLE_NAME) => {

  const find = (id) => {
    return getConn()
      .then((conn) => r.table(TABLE_NAME).get(id).run(conn));
  };

  const all = () => {
    return getConn()
      .then((conn) => r.table(TABLE_NAME).run(conn))
      .then((cursor) => cursor.toArray());
  };

  const findBy = (by) => {
    return getConn()
      .then((conn) => r.table(TABLE_NAME).filter(by).run(conn))
      .then((cursor) => cursor.toArray());
  };

  const changes = () => {
    return getConn()
      .then((conn) => r.table(TABLE_NAME).changes().run(conn));
  };

  const update = (id, payload) => {
    return getConn()
      .then((conn) => r.table(TABLE_NAME).get(id).update(payload).run(conn))
  };

  return {
    find,
    all,
    changes,
    update,
    findBy
  }
};
