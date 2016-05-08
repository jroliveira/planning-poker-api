'use strict';

import Room from './../room/room';

function joined(newUser, socket) {
  if (socket.room) {
    let currentRoom = global.rooms[socket.room];
    if (currentRoom) {
      currentRoom.removeUser(socket);
    }
  }

  let room = global.rooms[newUser.room] || new Room(newUser.room);
  let user = room.addUser(newUser.name, socket);
  global.rooms[user.room] = room;

  socket.emit('joined', {
    user: {
      id: user.id,
      name: user.name,
    },
    room: user.room,
    users: room.users,
  });

  console.log('user:join -> %j', user);
}

export default joined;
