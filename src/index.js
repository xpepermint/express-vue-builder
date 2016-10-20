const fs = require('fs');
const {VueRender} = require('vue-builder');

/*
* Vue.js rendering utils middleware.
*/

exports.bundleRenderer = function ({bundlePath}={}) {
  let source = fs.readFileSync(bundlePath, 'utf8');
  let render = new VueRender({source});

  return (req, res, next) => {
    req.vue = render;
    next();
  };
}
