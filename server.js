'use strict';

const cors = require('kcors');
const compress = require('koa-compress');
const json = require('koa-json');
const route = require('koa-route');
const Koa = require('koa');
const http = require('http');
const socketio = require('socket.io');

const app = new Koa();
app.use(cors());
app.use(compress());
app.use(json());

const home = require('./routes/home');

app.use(route.get('/', function*() {
  yield home(this);
}));

const server = http.createServer(app.callback());
const io = socketio(server);

global.rooms = {};

const cardRevealed = require('./events/card-revealed');
const userJoined = require('./events/user-joined');
const userLeft = require('./events/user-left');

io.on('connection', (socket) => {
  socket.on('card:reveal', (card) => cardRevealed(card, socket));
  socket.on('join', (user) => userJoined(user, socket));
  socket.on('disconnect', () => userLeft(socket));
});

if (!module.parent) {
  let port = process.env.PORT || 8081;
  app.listen(port);

  console.log('listening on port 8081');
}
