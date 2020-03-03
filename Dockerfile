FROM node:11-alpine

RUN mkdir -p /usr/app/app/node_modules && chown -R node:node /usr/app

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

RUN mkdir -p tmp

RUN mkdir -p tmp/uploads

USER node

EXPOSE 8080
