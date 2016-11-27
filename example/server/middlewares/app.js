exports.appRender = function () {
  return (req, res) => {
    req.vue.renderToString()
    .then((page) => (
      res.status(200).send([
        `<!DOCTYPE html>`,
        `<html lang="en">`,
        `<head>`,
          `<meta charset="utf-8">`,
          `<title>Example</title>`,
          `<link href="/bundle.css" rel='stylesheet' type='text/css'>`,
        `</head>`,
        `<body>`,
          page,
          `<script src="/bundle.js"></script>`,
        `</body>`,
        `</html>`
      ].join(''))
    ))
    .catch((err) => {
      console.error(error);
      res.status(500).send('Server Error');
    });
  }
};
