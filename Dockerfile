FROM node:9-stretch

WORKDIR /app

ARG SERVER=false
ENV USE_SERVER=${SERVER}
EXPOSE 3000

COPY ./package.json ./package-lock.json ./
RUN npm i --progress --no-audit

COPY . ./

RUN npm run build

ENTRYPOINT ["node", "server.js"]
