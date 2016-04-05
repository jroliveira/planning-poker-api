'use strict';

import cardChosen from './card/chosen';
import cardRevealed from './card/revealed';
import cardCleared from './card/cleared';
import userJoined from './user/joined';
import userLeft from './user/left';

function router(io) {
  io.on('connection', (socket) => {
    socket.on('card:chosen', (card) => cardChosen(card, socket));
    socket.on('card:reveal', (card) => cardRevealed(card, socket));
    socket.on('card:cleared', () => cardCleared(socket));
    socket.on('join', (user) => userJoined(user, socket));
    socket.on('disconnect', () => userLeft(socket));
  });
}

export default router;
