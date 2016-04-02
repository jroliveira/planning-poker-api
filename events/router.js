'use strict';

import cardRevealed from './card/revealed';
import userJoined from './user/joined';
import userLeft from './user/left';

function router(io) {
  io.on('connection', (socket) => {
    socket.on('card:reveal', (card) => cardRevealed(card, socket));
    socket.on('join', (user) => userJoined(user, socket));
    socket.on('disconnect', () => userLeft(socket));
  });
}

export default router;
