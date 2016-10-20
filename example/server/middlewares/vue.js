const {build} = require('vue-webpack');
const {bundleRenderer} = require('../../../src');

exports.vueBundleRenderer = function () {
  return bundleRenderer({
    bundlePath: `${__dirname}/../../../dist/server/bundle.js`
  });
};
