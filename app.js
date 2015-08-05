'use strict';

const
  compress = require('koa-compress'),
  cors = require('kcors'),
  koa = require('koa.io'),
  app = module.exports = koa();

require('koa-qs')(app);

app.use(cors());
app.use(compress());

global.rooms = {};

let disconnect = require('./io-routes/disconnect');

app.io.use(function* (next) {
  yield * next;

  disconnect(this);
});

/*
 * router for socket event
 */

let join = require('./io-routes/join');
let cardReveal = require('./io-routes/card-reveal');

app.io.route('join', join);
app.io.route('card reveal', cardReveal);

if (!module.parent) {
  let port = process.env.PORT || 8081;
  app.listen(port);

  console.log('listening on port 8081');
}