'use strict';

import User from './user';

class Room {
  constructor(name) {
    this.name = name;
    this.users = {};
  }

  addUser(id, name) {
    this.users[id] = new User(id, name, this.name);
  }

  removeUser(id) {
    delete this.users[id];
  }

  getUser(id) {
    return this.users[id];
  }

  chooseCard(id, points) {
    this.users[id].choose(points);
  }

  clearCard(id) {
    this.users[id].clearCard();
  }
}

export default Room;
