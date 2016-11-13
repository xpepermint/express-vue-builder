![Build Status](https://travis-ci.org/xpepermint/express-vue-builder.svg?branch=master)&nbsp;[![NPM Version](https://badge.fury.io/js/express-vue-builder.svg)](https://badge.fury.io/js/express-vue-builder)&nbsp;[![Dependency Status](https://gemnasium.com/xpepermint/express-vue-builder.svg)](https://gemnasium.com/xpepermint/express-vue-builder)

# [express](http://expressjs.com)-[vue-builder](https://github.com/xpepermint/vue-builder)

> Vue.js server-side rendering middleware for Express.js.

<img src="logo.png" height="60" style="margin-bottom: 20px" />

This package provides production-ready server-side [Vue.js](http://vuejs.org) application rendering middleware for [Express.js](http://expressjs.com). It creates a new instance of [VueRender](https://github.com/xpepermint/vue-builder#api) class (provided by the [vue-builder](https://github.com/xpepermint/express-vue-builder) dependency) and installs it to the request object as `req.vue` variable.

This is an open source package for [Vue.js](http://vuejs.org/) and [Express.js](http://expressjs.com). The source code is available on [GitHub](https://github.com/xpepermint/express-vue-builder) where you can also find our [issue tracker](https://github.com/xpepermint/express-vue-builder/issues).

## Related Projects

* [vue-webpack](https://github.com/xpepermint/vue-webpack): Webpack configuration object generator for Vue.js.
* [vue-builder](https://github.com/xpepermint/vue-builder): Server-side and client-side rendering for Vue.js.
* [express-vue-dev](https://github.com/xpepermint/express-vue-dev): Vue.js development server middleware for Express.js.
* [koa-vue-builder](https://github.com/kristianmandrup/koa-vue-builder): Vue.js server-side rendering middleware for Koa.js.
* [koa-vue-dev](https://github.com/kristianmandrup/koa-vue-dev): Vue.js development server middleware for Koa.js.
* [vue-cli-template](https://github.com/xpepermint/vue-cli-template): A simple server-side rendering CLI template for Vue.js.

## Install

Run the command below to install the package.

```
$ npm install --save express-vue-builder vue-builder
```

## Usage

Before we deploy application in production, we need to compile our Vue.js application into a bundle. A bundle is simply a file holding application's source code. Because we would like to render application in browsers as well as on the server, we need to build two bundle files - one targeting browsers, the other targeting the server. Check the attached example on how to build a bundle. Check the documentation of the [vue-builder](https://github.com/xpepermint/express-vue-builder) package for details.

Once you've created the bundle file for server-side, you can create a middleware.

```js
const {bundleRenderer} = require('express-vue-builder');

let middleware = bundleRenderer(`./dist/server/bundle.js`); // pass this to app.use() of your Express application
```

Check the included `./example` directory or run the `npm run example` command to start the sample application.

## API

**bundleRenderer(bundlePath, options)**

> Server-side rendering middleware for Vue.js application.

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| bundlePath | String | Yes | - | Path to server-side application bundle.
| options | Object | No | - | [Renderer options](https://www.npmjs.com/package/vue-server-renderer#renderer-options).

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
