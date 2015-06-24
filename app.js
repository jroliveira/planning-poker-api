'use strict';

const
    compress = require('koa-compress'),
    logger = require('koa-logger'),
    serve = require('koa-static'),
    _ = require('koa-route'),
    cors = require('kcors'),
    koa = require('koa.io'),
    app = module.exports = koa();

require('koa-qs')(app);

app.use(cors());

// Logger
app.use(logger());

// Compress
app.use(compress());

// usernames which are currently connected to the chat
var channels = {};

// IO
app.io.use(function* userLeft(next) {
    // on connect
    yield* next;
    // on disconnect
    if (this.joinedUser) {
        console.log('%s disconnected', this.channel.user);
        delete channels[this.channel];
    }
});

/*
 * router for socket event
 */

app.io.route('join', function* (next, channel) {
    this.channel = channel;
    channels[channel.channel] = channel;
    this.joinedUser = true;
    this.broadcast.emit('user joined', {
        id: this.socket.id, 
        user: this.channel.user
    });
});

app.io.route('card reveal', function* (next, card) {
    let cardRevealed = {
        userId: this.socket.id,
        points: card
    };

    this.broadcast.emit('card revealed', cardRevealed);
});

// error handler
app.on('error', function (err) {
    if (process.env.NODE_ENV != 'test') {
        console.log('sent error %s to the cloud', err.message);
        console.log(err);
    }
});

if (!module.parent) {
    let port = process.env.PORT || 8081;
    app.listen(port);

    console.log('listening on port 8081');
}
