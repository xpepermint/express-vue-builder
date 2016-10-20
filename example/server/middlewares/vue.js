const {build} = require('vue-webpack');
const {devServer, bundleRenderer} = require('../../../src');

exports.vueDevServer = function(ctx) {
  return devServer({
    server: build({
      mode: 'server',
      inputFilePath: `${__dirname}/../../app/server-entry.js`
    }),
    client: build({
      mode: 'client',
      inputFilePath: `${__dirname}/../../app/client-entry.js`
    })
  })
};

exports.vueBundleRenderer = function () {
  return bundleRenderer({
    bundlePath: `${__dirname}/../../../dist/server/bundle.js`
  });
};
