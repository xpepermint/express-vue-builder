const path = require('path');
const fs = require('fs');
const {VueRender} = require('vue-builder');

/*
* Vue.js rendering utils middleware.
*/

exports.bundleRenderer = function (bundlePath, options={}) {
  let source = fs.readFileSync(path.resolve(bundlePath), 'utf8');

  return (req, res, next) => {
    req.vue = new VueRender(source, options); // discrete state between requests
    next();
  };
}
