'use strict';

import request from 'request';

class MarinetRestfulProvider {

  /**
   * `MarinetRestfulProvider` constructor.
   *
   * @param {Object} config
   * @api public
   */
  constructor(config) {
    this._config = config || {
      rootUrl: '',
      app: {
        id: '',
        key: '',
      },
    };
  }

  /**
   * Logs the error
   *
   * @param {Object} error
   * @api public
   */
  error(error) {
    if (!this._config.rootUrl) {
      throw new Error('There is no rootUrl in the config.');
    }

    if (!this._config.app) {
      throw new Error('There is no app in the config.');
    }

    if (!this._config.app.id) {
      throw new Error('Can\'t find app.id property.');
    }

    if (!this._config.app.key) {
      throw new Error('Can\'t find app.key property.');
    }

    let options = {
      url: `${this._config.rootUrl}/error`,
      method: 'POST',
      headers: {
        marinetappid: this._config.app.id,
        marinetappkey: this._config.app.key,
        'Content-Type': 'application/json',
      },
      json: error,
    };

    request(options);
  }
}

export default MarinetRestfulProvider;
