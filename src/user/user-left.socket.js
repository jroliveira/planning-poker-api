'use strict';

function left(socket) {
  if (!socket.room) {
    return;
  }

  let room = global.rooms[socket.room];
  if (!room) {
    return;
  }

  room.removeUser(socket);
  global.rooms[socket.room] = room;

  console.log(`user:left -> ${socket.id}`);
}

export default left;
