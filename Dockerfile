FROM node:alpine3.18

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install
# RUN npm ci --omit=dev

COPY . .

EXPOSE 3425

CMD [ "node", "server.js" ]