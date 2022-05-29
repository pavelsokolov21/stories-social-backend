FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV PORT=${PORT}

RUN npm run build

EXPOSE 8080
CMD ["npm", "run", "start:prod"]