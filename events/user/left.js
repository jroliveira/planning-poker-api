'use strict';

function left(socket) {
  if (!socket.room) {
    return;
  }

  let user = global.rooms[socket.room].getUser(socket.id);

  if (!user) {
    return;
  }

  socket.room = null;
  socket.leave(user.room);
  global.rooms[user.room].removeUser(user.id);

  socket
    .broadcast
    .to(user.room)
    .emit('user:left', {
      users: global.rooms[user.room].users
    });
}

export default left;
