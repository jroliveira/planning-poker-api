'use strict';

class User {
  constructor(id, name, room) {
    this.id = id;
    this.name = name;
    this.card = null;
    this.room = room;
  }

  clearCard() {
    this.card = null;
  }

  choose(card) {
    this.card = card;
  }
}

export default User;
