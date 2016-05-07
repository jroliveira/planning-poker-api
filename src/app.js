'use strict';

import http from 'http';
import webapi from './app.webapi';
import Socket from './app.socket';

const server = http.createServer(webapi.callback());

setup();

async function setup() {
  await Socket.createWith(server);

  require('./card/card.module');
  require('./error/error.module');
  require('./home/home.module');
  require('./user/user.module');
}

let port = process.env.PORT || 8081;
server.listen(port, () => console.log(`Listening on port ${port}`));
