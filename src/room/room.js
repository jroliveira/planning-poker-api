'use strict';

import User from './../user/user';

class Room {
  constructor(name) {
    this.name = name;
    this.users = {};
  }

  addUser(name, socket) {
    let user = new User(socket.id, name, this.name);
    this.users[user.id] = user;
    socket.room = this.name;
    socket.join(this.name);

    this.notify('user:joined', socket);

    return user;
  }

  removeUser(socket) {
    if (!this.users[socket.id]) {
      return;
    }

    delete this.users[socket.id];
    socket.room = null;
    socket.leave(this.name);

    this.notify('user:left', socket);
  }

  chooseCard(points, socket) {
    let user = this.users[socket.id];
    user.choose(points);
    this.users[socket.id] = user;

    this.notify('card:chosen', socket);
  }

  clearCard(socket) {
    let user = this.users[socket.id];
    user.clearCard();
    this.users[socket.id] = user;

    this.notify('card:cleared', socket);
  }

  notify(message, socket) {
    socket
      .broadcast
      .to(this.name)
      .emit(message, {
        users: this.users,
      });
  }
}

export default Room;
