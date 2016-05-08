'use strict';

import Socket from './../app.socket';
import joined from './user-joined.socket';
import left from './user-left.socket';

config();

async function config() {
  Socket
    .instance
    .on('connection', socket => {
      socket.on('join', user => joined(user, socket));
      socket.on('disconnect', () => left(socket));
    });
}
