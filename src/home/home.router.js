'use strict';

import Router from 'koa-router';
import app from './../app.webapi';
import index from './home-index.route';

const router = new Router();

router.get('/', index);

app
  .use(router.routes())
  .use(router.allowedMethods());
