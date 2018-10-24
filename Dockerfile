FROM node:8.12.0-alpine as base

ENV NODE_ENV=production

FROM base as builder

RUN apk add git

WORKDIR /app

ADD .git .git

RUN git checkout -- src index.js package.json .babelrc Procfile
RUN npm install
RUN rm -rf .git package-lock.json

FROM base

COPY --from=builder /app /app

WORKDIR /app

EXPOSE 5000

ENV SUDO_USER=root

CMD [ "node_modules/.bin/nf", "start" ]
