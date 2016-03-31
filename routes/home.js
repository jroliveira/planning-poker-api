'use strict';

class HomeRoute {
  static * index() {
    let pkg = require('./../package.json');

    this.body = {
      name: pkg.name,
      version: pkg.version,
      message: 'I\'m working...'
    };
  }
}

module.exports = HomeRoute;
