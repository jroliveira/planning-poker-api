'use strict';

import MarinetProvider from './../../lib/marinet-restful-provider';

const provider = new MarinetProvider({
  rootUrl: process.env.MARINET_URL,
  app: {
    id: process.env.MARINET_APP_ID,
    key: process.env.MARINET_APP_KEY,
  },
});

async function create(ctx, next) {
  let error = ctx.request.body;
  provider.error(error);

  ctx.status = 201;
}

export default create;
