'use strict';

import app from './app';
import http from 'http';
import socket from './socket';

const server = http.createServer(app.callback());
socket(server);

let port = process.env.PORT || 8081;
server.listen(port, () => console.log(`Listening on port ${port}`));
