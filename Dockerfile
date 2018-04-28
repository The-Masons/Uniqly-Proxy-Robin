FROM node:8.11.1

WORKDIR /uniqly-proxy

COPY package-lock.json /uniqly-proxy/
COPY package.json /uniqly-proxy/
COPY server.js /uniqly-proxy/
COPY public /uniqly-proxy/public/

RUN npm install

EXPOSE 3000

CMD ["npm","start"]
