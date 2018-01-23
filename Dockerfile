FROM node:alpine

RUN npm install -g serve

COPY build/ /app/

WORKDIR /app

CMD ["serve", "."]

EXPOSE 5000