'use strict';

import Card from './../card/card';

class User {
  constructor(id, name, room) {
    this.id = id;
    this.name = name;
    this.room = room;
    this.card = null;
  }

  clearCard() {
    this.card = null;
  }

  choose(points) {
    this.card = new Card(points);
  }
}

export default User;
