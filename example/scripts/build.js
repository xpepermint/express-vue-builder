const {VueBuilder} = require('vue-builder');
const webpack = require('../config/webpack');

let mode = process.argv[2];
let options = webpack({mode});
let builder = new VueBuilder(options);
builder.build().catch(console.log);
