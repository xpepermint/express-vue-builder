const express = require('express');
const {vueDevServer, vueBundleRenderer} = require('./middlewares/vue');
const {appRender} = require('./middlewares/app');

const isProduction = process.env.NODE_ENV === 'production';

exports.createServer = function (host, port, cb) {
  let app = express();
  console.log(`Listening on ${host}:${port} ...`);

  if (isProduction) {
    app.use(vueBundleRenderer());
    console.log('middleware: vueBundleRenderer');
  }
  else {
    app.use(vueDevServer());
    console.log('middleware: vueDevServer');
  }

  app.use(appRender());
  console.log('middleware: appRender');

  return app.listen(port, host, cb);
};
