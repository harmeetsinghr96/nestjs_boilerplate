FROM node:18
WORKDIR /gateway_service
COPY package*.json ./
EXPOSE 8081
COPY tsconfig.json ./
COPY . .
RUN npm install
RUN npm run build
CMD [ "npm", "run", "start" ]
