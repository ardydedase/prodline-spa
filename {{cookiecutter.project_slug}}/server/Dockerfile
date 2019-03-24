FROM node:10

RUN mkdir -p /app/server

WORKDIR /app/server

# copy files
COPY ./package.json ./
COPY ./package-lock.json ./
COPY ./index.js ./

RUN npm install

RUN ls -al

EXPOSE 5000

CMD [ "npm", "start" ]
