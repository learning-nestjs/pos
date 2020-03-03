FROM node:11-alpine

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . /usr/app

RUN mkdir tmp

RUN mkdir tmp/uploads

EXPOSE 8080
