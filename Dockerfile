# Extending node:5.9
FROM node:5.9

COPY package.json /app/package.json
RUN cd /app && npm install --production

COPY . /app

EXPOSE 8888
WORKDIR /app
