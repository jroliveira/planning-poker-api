'use strict';

import socketio from 'socket.io';

let socket = null;
global.rooms = {};

class Socket {
  static get instance() {
    if (!socket) {
      throw new Error('Socket is null');
    }

    return socket;
  }

  static async createWith(server) {
    if (socket) {
      throw Error('Socket is instantiated');
    }

    socket = socketio(server);
  }
}

export default Socket;
