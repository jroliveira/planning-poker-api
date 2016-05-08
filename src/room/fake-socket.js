'use strict';

class FakeSocket {
  constructor() {
    this.id = '/#AAA999';
    this.broadcast = {
      to: () => {
        return {
          emit: this.emit,
        };
      },
    };
  }

  join() {

  }

  leave() {

  }

  emit() {

  }
}

export default FakeSocket;
