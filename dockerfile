FROM node:22

WORKDIR /usr/src/app

COPY ./build ./build
COPY .env .env

EXPOSE 80

CMD ["node", "build/index.js"]
