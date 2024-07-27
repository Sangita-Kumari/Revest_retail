# FROM m2pfintech01/m2p-base-images:node-alpine-18
FROM node:20-alpine3.20

# Execute commands before building the container
RUN echo BEFORE_BUILD

# Create app directory
WORKDIR /usr/src/node_backend

# Copy package.json and yarn.lock before running yarn install
COPY package*.json ./

# Bundle app source
COPY . .

# Execute commands after building the container
RUN echo AFTER_BUILD

RUN chown -R nobody /usr/src/node_backend && \
    chown -R nobody /tmp


USER 65534

EXPOSE 8080

CMD ["npm", "start"]
