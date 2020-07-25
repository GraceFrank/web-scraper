#Base image
FROM node:10.16.3

# Create app directory
WORKDIR /usr/src/app

#install dependencies
COPY package*.json ./

RUN npm install

COPY . .

# set environment variables from env file
CMD [ "/bin/bash source.env" ]