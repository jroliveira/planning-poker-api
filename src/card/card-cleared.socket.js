'use strict';

function cleared(socket) {
  if (!socket.room) {
    return;
  }

  let room = global.rooms[socket.room];
  room.clearCard(socket);
  global.rooms[socket.room] = room;

  socket.emit('cleared', {
    user: {
      id: socket.id,
    },
    users: room.users,
  });

  console.log(`card:cleared -> ${socket.id}`);
}

export default cleared;
