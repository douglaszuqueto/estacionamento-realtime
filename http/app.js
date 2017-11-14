const path = require('path');

module.exports = (express, app) => {
  /* HTML */
  app.use(express.static(path.join(__dirname, '../client')));

  /* MIDDLEWARES  */
  require('./middlewares')(app);

  /* ROUTES */
  const router = require('./routes');

  app.use('/', router);

};
