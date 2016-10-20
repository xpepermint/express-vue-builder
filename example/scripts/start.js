const {createServer} = require('../server');

createServer('127.0.0.1', 3000);
console.log(`Listening on 127.0.0.1:3000`);
