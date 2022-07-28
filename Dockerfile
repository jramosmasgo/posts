FROM node

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --pure-lockfile

EXPOSE 3000

CMD ["npm","run","dev"]

