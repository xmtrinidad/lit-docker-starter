FROM node:12.16.3-alpine3.11

WORKDIR /usr/src/app
COPY package.json .
RUN apk add --no-cache git
RUN npm install

EXPOSE 8000
CMD [ "npm", "start" ]

COPY . .