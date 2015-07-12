'use strict';

module.exports = function* join(next, user) {
    this.user = {
        id: this.socket.id,
        name: user.name,
        room: user.room
    };

    this.join(this.user.room);

    if (!global.rooms[this.user.room]) {
        global.rooms[this.user.room] = { users: [] };
    }

    this.emit('joined', global.rooms[this.user.room].users);
    this.broadcast.to(this.user.room).emit('user joined', this.user);

    global.rooms[this.user.room].users.push(this.user);
};