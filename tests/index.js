const test = require('ava');
const fetch = require('node-fetch');
const {createServer} = require('../example');

let server = null;

test.cb.before((t) => {
  server = createServer('127.0.0.1', 3001, t.end);
});

test.cb.after((t) => {
  server.close(t.end);
});

test.cb.serial('should render server-side', (t) => {
  t.pass();
  fetch('http://127.0.0.1:3001').then((res) => {
    return res.text().then((txt) => {
      t.is(txt.indexOf('server-rendered="true"') > 0, true);
      t.is(txt.indexOf('Hello World!') > 0, true);
      t.end();
    });
  }).catch((err) => {
    t.fail();
    t.end();
  })
});
