exports.appRender = function() {
  return (req, res) => {
    let page = req.vue.renderToStream()

    res.write(`<!DOCTYPE html>`);
    page.on('init', () => {
      res.write(`<html lang="en">`);
      res.write(`<head>`);
      res.write(  `<meta charset="utf-8">`);
      res.write(  `<title>Example</title>`);
      res.write(  `<link href="/bundle.css" rel='stylesheet' type='text/css'>`);
      res.write(`</head>`);
      res.write(`<body>`);
    });
    page.on('data', (chunk) => {
      res.write(chunk);
    });
    page.on('end', () => {
      res.write(  `<script src="/bundle.js"></script>`);
      res.write(`</body>`);
      res.write(`</html>`);
      res.end();
    });
    page.on('error', function (error) {
      console.error(error);
      res.status(500).send('Server Error');
    });
  }
};
