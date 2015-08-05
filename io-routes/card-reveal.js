'use strict';

module.exports = function* cardReveal(next, card) {
  let cardRevealed = {
    userId: this.user.id,
    points: card
  };

  this.broadcast.to(this.user.room).emit('card revealed', cardRevealed);
};