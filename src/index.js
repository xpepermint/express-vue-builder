const fs = require('fs');
const webpack = require('webpack');
const {VueBuilder, VueRender} = require('vue-builder');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

/*
* A function for merging middlewares into one.
*/

function combine(mids) {
  return mids.reduce(function(a, b) {
    return function(req, res, next) {
      a(req, res, function(err) {
        if (err) {
          return next(err);
        }
        b(req, res, next);
      });
    };
  });
}

/*
* Vue.js development server middleware.
*/

exports.devServer = function ({server, client, verbose=false}={}) {
  let clientConfig = Object.assign({}, client);
  let serverConfig = Object.assign({}, server);

  let clientCompiler = webpack(clientConfig);
  let serverBuilder = new VueBuilder(serverConfig);

  return combine([
    webpackDevMiddleware(clientCompiler, {
      noInfo: !verbose,
      publicPath: clientCompiler.options.output.publicPath
    }),
    webpackHotMiddleware(clientCompiler, {
      serverSideRender: false,
      historyApiFallback: true
    }),
    (req, res, next) => {
      serverBuilder.compile().then((source) => {
        req.vue = new VueRender({source});
        next();
      });
    }
  ]);
}

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
