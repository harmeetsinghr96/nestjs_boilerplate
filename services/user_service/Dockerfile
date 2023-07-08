FROM node:18
WORKDIR /user_service

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
ARG MONGO_URI
ENV MONGO_URI $MONGO_URI

COPY . .
RUN npm run build

CMD [ "npm", "run", "start" ]
