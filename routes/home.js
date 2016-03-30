'use strict';

function* home(response) {
  let pkg = require('./../package.json');

  yield response.body = {
    name: pkg.name,
    version: pkg.version,
    message: 'I\'m working...'
  };
}

module.exports = home;
