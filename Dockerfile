FROM node:16.1.0

RUN mkdir -p /app
WORKDIR /app
ADD package.json yarn.lock /app/
RUN yarn --pure-lockfile
COPY . /app/
EXPOSE 3000

CMD [ "yarn", "dev" ]
