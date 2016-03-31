'use strict';

const MarinetProvider = require('./../lib/marinete-restful-provider');

const provider = new MarinetProvider({
  rootUrl: 'https://marinet-api.herokuapp.com',
  app: {
    id: '56f9ce51c3d78e04006b8cd1',
    key: 'eab36227581e5bb7791d142b9b75badd796bbd40b3ce0ebc9ec3e4eb47171f8d'
  }
});

class ErrorsRoute {
  static * create() {
    let error = this.request.body;
    console.log(error);
    provider.error(error);

    this.status = 201;
  }
}

module.exports = ErrorsRoute;
