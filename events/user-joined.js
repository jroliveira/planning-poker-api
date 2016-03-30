'use strict';

function userJoined(user, socket) {
  if (socket.user) {
    socket.leave(socket.user.room);

    let index = global.rooms[socket.user.room].users.indexOf(socket.user);
    if (index > -1) {
      global.rooms[socket.user.room].users.splice(index, 1);
    }
  }

  socket.user = {
    id: socket.id,
    name: user.name,
    room: user.room
  };

  if (!global.rooms[socket.user.room]) {
    global.rooms[socket.user.room] = {
      users: []
    };
  }

  socket.join(socket.user.room);

  socket.emit('joined', {
    room: socket.user.room,
    users: global.rooms[socket.user.room].users
  });

  socket
    .broadcast
    .to(socket.user.room)
    .emit('user:joined', socket.user);

  global.rooms[socket.user.room].users.push(socket.user);
}

module.exports = userJoined;
