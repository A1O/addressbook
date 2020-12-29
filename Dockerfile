FROM node:14.7-alpine
ENV NODE_ENV=production
WORKDIR /home/node
COPY package*.json *.js ./
COPY devops/env.test.txt ./.env
RUN npm install --only=production
EXPOSE 3000
CMD [ "npm", "run", "start"]