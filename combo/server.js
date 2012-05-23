var comboServer = require('combohandler/lib/server'),
app;

app = comboServer({
  roots: {
    '/yui3': '/Users/stephenstewart/Sites/gray-cloud/yui3',
    '/yui3-gallery': '/Users/stephenstewart/Sites/gray-cloud/yui3-gallery'
  }
});

app.listen(3000);
