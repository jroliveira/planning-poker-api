'use strict';

module.exports = function* join(next, user) {
  if (this.user) {
    this.leave(this.user.room);
    let index = global.rooms[this.user.room].users.indexOf(this.user);
    if (index > -1) {
      global.rooms[this.user.room].users.splice(index, 1);
    }
  }

  this.user = {
    id: this.socket.id,
    name: user.name,
    room: user.room
  };
  
  if (!global.rooms[this.user.room]) {
    global.rooms[this.user.room] = {
      users: []
    };
  }

  this.join(this.user.room);

  this.emit('joined', global.rooms[this.user.room].users);
  this.broadcast.to(this.user.room).emit('user joined', this.user);

  global.rooms[this.user.room].users.push(this.user);
};