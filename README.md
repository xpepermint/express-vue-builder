![Build Status](https://travis-ci.org/xpepermint/express-vue-builder.svg?branch=master)&nbsp;[![NPM Version](https://badge.fury.io/js/express-vue-builder.svg)](https://badge.fury.io/js/express-vue-builder)&nbsp;[![Dependency Status](https://gemnasium.com/xpepermint/express-vue-builder.svg)](https://gemnasium.com/xpepermint/express-vue-builder)

# [express](http://expressjs.com)-[vue-builder](https://github.com/xpepermint/vue-builder)

> Vue.js server-side and client-side rendering middleware for Express.js.

<img src="logo.png" height="60" style="margin-bottom: 20px" />

This package provides [Vue.js](http://vuejs.org) middlewares for [express.js](http://expressjs.com). It includes a development server for client-side application rendering with support for hot module replacement and server-side application rendering utils.

This is an open source package for [Vue.js](http://vuejs.org/). The source code is available on [GitHub](https://github.com/xpepermint/express-vue-builder) where you can also find our [issue tracker](https://github.com/xpepermint/express-vue-builder/issues).

## Related Projects

* [vue-webpack](https://github.com/xpepermint/vue-webpack): Webpack configuration object generator for Vue.js.
* [vue-builder](https://github.com/xpepermint/express-vue-builder): Server-side and client-side rendering for Vue.js.

## Install

Run the command below to install the package.

```
$ npm install --save-dev express-vue-builder vue-builder webpack@2.1.0-beta.25
```

## Usage

Check the included `./example` directory or run the `npm run example:start` command to start the sample application.

### Development Server Middleware

The `devServer` is a fully featured development server middleware built on top of [Webpack](http://webpack.github.io) which renders the [Vue.js](http://vuejs.org) application for client-side and server-side. The middleware is configurable and supports hot module replacement out of the box. It should be used in **development only**.

To create a middleware, create a Webpack configuration objects for client-side and server-side then pass it the the `devServer` method. Use the [vue-webpack](https://github.com/xpepermint/vue-webpack) package to simplify the setup.

```js
const {build} = require('vue-webpack');
const {devServer} = require('express-vue-builder');

let middleware = devServer({
  server: build({
    mode: 'server',
    inputFilePath: `./app/server-entry.js` // Vue application entry file for server-side
  }),
  client: build({
    mode: 'client',
    inputFilePath: `./app/client-entry.js` // Vue application entry file for client-side
  })
}); // pass this to app.use() of your Express application
```

### Bundle Renderer Middleware

The `bundleRenderer` middleware provides server-side rendering for Vue.js applications in **production**. It creates a new instance of [VueRender](https://github.com/xpepermint/vue-builder#api) class (provided by the [vue-builder](https://github.com/xpepermint/express-vue-builder) dependency) and installs it to the request object as `req.vue` variable.

Before we deploy application in production, we need to compile our Vue.js application into a bundle. A bundle is simply a file holding application's source code. Because we would like to render application in browsers as well as on the server, we need build two bundle files - one targeting browsers, the other targeting the server. Check the attached example on how to build a bundle or check the documentation of the [vue-builder](https://github.com/xpepermint/express-vue-builder) package.

Once you've created the bundle file for server-side, you can create a middleware.

```js
const {bundleRenderer} = require('express-vue-builder');

let middleware = bundleRenderer({
  bundlePath: `./dist/server/bundle.js` // Vue application bundle for server-side
}); // pass this to app.use() of your Express application
```

## API

**devServer({server, client, verbose})**

> Development server middleware for serving Vue.js application.

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| server | Object | Yes | - | Webpack configuration object for server-side rendering.
| client | Object | Yes | - | Webpack configuration object for client-side rendering.
| verbose | Boolean | No | false | When `true` detailed logging is enabled.

**bundleRenderer({bundlePath})**

> Server-side rendering utils for Vue.js application in production.

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| bundlePath | String | Yes | - | Path to server-side application bundle.

## License (MIT)

```
Copyright (c) 2016 Kristijan Sedlak <xpepermint@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
