'use strict';

import Router from 'koa-router';
import app from './../app.webapi';
import create from './error-create.route';

const router = new Router();

router.post('/errors', create);

app
  .use(router.routes())
  .use(router.allowedMethods());
