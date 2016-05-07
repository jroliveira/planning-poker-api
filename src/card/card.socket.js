'use strict';

import Socket from './../app.socket';
import chosen from './card-chosen.socket';
import revealed from './card-revealed.socket';
import cleared from './card-cleared.socket';

config();

async function config() {
  Socket
    .instance
    .on('connection', socket => {
      socket.on('card:chosen', card => chosen(card, socket));
      socket.on('card:reveal', card => revealed(card, socket));
      socket.on('card:cleared', () => cleared(socket));
    });
}
