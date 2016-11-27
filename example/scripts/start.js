const {createServer} = require('../server');
const {httpHost, httpPort} = require('../config/settings');

createServer(httpHost, httpPort);
console.log(`Listening on ${httpHost}:${httpPort}`);
