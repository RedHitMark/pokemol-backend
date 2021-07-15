FROM node:latest

ENV PORT=3000

COPY . /app
WORKDIR /app

RUN npm install

EXPOSE $PORT
ENTRYPOINT ["npm", "start"]
