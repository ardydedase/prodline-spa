FROM node:10

RUN mkdir -p /app/client

WORKDIR /app/client

# copy files
COPY ./package.json ./
COPY ./package-lock.json ./

# copy folders
COPY ./public ./public
COPY ./src ./src

RUN npm install

RUN ls -al

EXPOSE 3000

CMD [ "npm", "start" ]
