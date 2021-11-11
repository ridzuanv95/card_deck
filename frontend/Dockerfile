# Base image
FROM node:14

# Get argument value from docker-compose
# ARG Stage

# Set working directory in image
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install all dependencies/library in image based on package.json
RUN npm install

# Bundle app source
COPY . .

# Build/Compile app in image
RUN echo "$Stage mode"; npm run-script build;

# New stage
# Recreate new base image
FROM nginx:stable

# Delete all nginx default app inside current(new) stage
RUN rm -rf ./usr/share/nginx/html/*

# Copy compiled angular app from previous stage to current(new) stage
COPY --from=0 ./app/dist/build ./usr/share/nginx/html

# Copy the nginx setting to current(new) stage
COPY ./nginx.conf ./etc/nginx/nginx.conf
