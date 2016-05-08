'use strict';

import Card from './../card/card';

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

  choose(points) {
    this.card = new Card(points);
  }
}

export default User;
