FROM node:alpine as builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./server/package*.json ./server/yarn.lock ./

# Run yarn without generating a yarn.lock file
RUN yarn --pure-lockfile

# Bundle app source
ADD ./server/routes ./routes
ADD ./server/server.js .


# Use the port used by our server.js configuration
EXPOSE 7000
CMD [ "yarn", "build" ]