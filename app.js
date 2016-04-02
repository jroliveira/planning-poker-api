'use strict';

import bodyParser from 'koa-bodyparser';
import compress from 'koa-compress';
import cors from 'kcors';
import json from 'koa-json';
import Koa from 'koa';
import router from './routes/router';

const app = new Koa();
app
  .use(bodyParser())
  .use(cors())
  .use(compress())
  .use(json())
  .use(router.routes())
  .use(router.allowedMethods());

export default app;
