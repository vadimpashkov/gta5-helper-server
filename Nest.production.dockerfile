
FROM node:12.13-alpine

WORKDIR /usr/src/app

COPY ../ .

RUN npm ci

RUN npm run build

CMD ["node", "dist/server/main"]

