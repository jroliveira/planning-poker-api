'use strict';

import bodyParser from 'koa-bodyparser';
import compress from 'koa-compress';
import cors from 'kcors';
import json from 'koa-json';
import logger from 'koa-logger';
import Koa from 'koa';

const app = new Koa();
app
  .use(bodyParser())
  .use(cors())
  .use(compress())
  .use(json())
  .use(logger());

export default app;
