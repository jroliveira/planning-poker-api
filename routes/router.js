'use strict';

import Router from 'koa-router';
import homeIndex from './home/index';
import errorCreate from './errors/create';

const router = new Router();

router.get('/', homeIndex);
router.post('/errors', errorCreate);

export default router;
