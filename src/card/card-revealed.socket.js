'use strict';

function revealed(card, socket) {
  if (!socket.room) {
    return;
  }

  let room = global.rooms[socket.room];

  socket.emit('revealed', {
    user: {
      id: socket.id,
    },
    card: card,
    users: room.users,
  });

  socket
    .broadcast
    .to(socket.room)
    .emit('card:revealed', {
      users: room.users,
    });

  console.log(`card:revealed -> ${socket.id}`);
}

export default revealed;
