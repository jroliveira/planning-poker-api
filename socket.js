'use strict';

import socketio from 'socket.io';
import router from './events/router';

global.rooms = {};

function socket(server) {
  const io = socketio(server);

  router(io);
}

export default socket;
