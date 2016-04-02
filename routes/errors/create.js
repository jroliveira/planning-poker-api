'use strict';

import MarinetProvider from './../../lib/marinete-restful-provider';

const provider = new MarinetProvider({
  rootUrl: 'https://marinet-api.herokuapp.com',
  app: {
    id: '56f9ce51c3d78e04006b8cd1',
    key: 'eab36227581e5bb7791d142b9b75badd796bbd40b3ce0ebc9ec3e4eb47171f8d'
  }
});

async function create(ctx, next) {
  let error = ctx.request.body;
  provider.error(error);

  ctx.status = 201;
}

export default create;
