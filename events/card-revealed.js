'use strict';

function cardRevealed(card, socket) {
  let cardRevealed = {
    userId: socket.user.id,
    points: card
  };

  socket
    .broadcast
    .to(socket.user.room)
    .emit('card:revealed', cardRevealed);
}

module.exports = cardRevealed;
