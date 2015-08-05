'use strict';

module.exports = function disconnect(_this) {
  if (_this.user) {
    _this.leave(_this.user.room);

    let index = global.rooms[_this.user.room].users.indexOf(_this.user);
    if (index > -1) {
      global.rooms[_this.user.room].users.splice(index, 1);
    }

    _this.broadcast.to(_this.user.room).emit('user left', _this.user);

    _this.user = null;
  }
};