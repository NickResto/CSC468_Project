FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install dotenv
COPY . .
EXPOSE 5001
CMD ["node", "server.js"]