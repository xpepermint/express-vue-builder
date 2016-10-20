const express = require('express');
const {vueBundleRenderer} = require('./middlewares/vue');
const {appRender} = require('./middlewares/app');

exports.createServer = function (host, port, cb) {
  let app = express();
  app.use(express.static('dist/client'));
  app.use(vueBundleRenderer());
  app.use(appRender());

  return app.listen(port, host, cb);
};
