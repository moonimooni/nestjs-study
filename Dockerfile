FROM node:16-alpine3.14
RUN apk add bash

WORKDIR /app
COPY package*.json /app
RUN npm install -g npm
RUN npm ci

COPY ./dist /app

EXPOSE 3000

CMD ["node", "main.js"]