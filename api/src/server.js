var koa = require('koa');
var app = koa();

app.use(function *() {
  this.body = 'hello from koajs';
});

app.listen(3000);
