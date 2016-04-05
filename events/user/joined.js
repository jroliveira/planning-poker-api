'use strict';

import Room from './../../lib/models/room';

function joined(newUser, socket) {
  if (!global.rooms[newUser.room]) {
    global.rooms[newUser.room] = new Room(newUser.room);
  }

  let user = global.rooms[newUser.room].getUser(socket.id);

  if (user) {
    socket.leave(user.room);
    global.rooms[user.room].removeUser(user.id);
  }

  socket.room = newUser.room;
  socket.join(newUser.room);
  global.rooms[newUser.room].addUser(socket.id, newUser.name);

  socket.emit('joined', {
    user: {
      id: socket.id,
      name: newUser.name
    },
    room: newUser.room,
    users: global.rooms[newUser.room].users
  });

  socket
    .broadcast
    .to(newUser.room)
    .emit('user:joined', {
      users: global.rooms[newUser.room].users
    });
}

export default joined;
