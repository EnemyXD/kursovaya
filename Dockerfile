FROM node:latest

WORKDIR /code

COPY package*.json ./
RUN npm install
COPY *.js ./
ADD build /code/build
ADD models /code/models
ADD routes /code/routes
ADD upload /code/upload

CMD ["npm", "start"]