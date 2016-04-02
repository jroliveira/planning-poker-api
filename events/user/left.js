'use strict';

function left(socket) {
  if (!socket.user) {
    return;
  }

  socket.leave(socket.user.room);

  let index = global.rooms[socket.user.room].users.indexOf(socket.user);
  if (index > -1) {
    global.rooms[socket.user.room].users.splice(index, 1);
  }

  socket
    .broadcast
    .to(socket.user.room)
    .emit('user:left', socket.user);

  socket.user = null;
}

export default left;
