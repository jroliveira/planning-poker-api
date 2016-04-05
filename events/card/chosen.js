'use strict';

function chosen(card, socket) {
  global.rooms[socket.room].chooseCard(socket.id, card);

  socket.emit('chosen', {
    user: {
      id: socket.id
    },
    card: card,
    users: global.rooms[socket.room].users
  });

  socket
    .broadcast
    .to(socket.room)
    .emit('card:chosen', {
      users: global.rooms[socket.room].users
    });
}

export default chosen;
