FROM node:16-alpine


RUN apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "start"]


