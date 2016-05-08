'use strict';

function chosen(card, socket) {
  if (!socket.room) {
    return;
  }

  let room = global.rooms[socket.room];
  room.chooseCard(card, socket);
  global.rooms[socket.room] = room;

  socket.emit('chosen', {
    user: {
      id: socket.id,
    },
    card: card,
    users: room.users,
  });

  console.log(`card:chosen -> ${socket.id}`);
}

export default chosen;
