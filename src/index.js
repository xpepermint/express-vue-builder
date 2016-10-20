const fs = require('fs');
const {VueRender} = require('vue-builder');

/*
* Vue.js rendering utils middleware.
*/

exports.bundleRenderer = function (bundlePath, options={}) {
  let source = fs.readFileSync(bundlePath, 'utf8');
  let render = new VueRender(source, options);

  return (req, res, next) => {
    req.vue = render;
    next();
  };
}
