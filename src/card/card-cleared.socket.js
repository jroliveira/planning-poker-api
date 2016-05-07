'use strict';

function cleared(socket) {
  if (!socket.room) {
    return;
  }

  global.rooms[socket.room].clearCard(socket.id);

  socket.emit('cleared', {
    user: {
      id: socket.id,
    },
    users: global.rooms[socket.room].users,
  });

  socket
    .broadcast
    .to(socket.room)
    .emit('card:cleared', {
      users: global.rooms[socket.room].users,
    });
}

export default cleared;
