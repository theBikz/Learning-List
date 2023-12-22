# FROM node:14.21.3-alpine
# WORKDIR /app
# ADD package*.json ./
# RUN npm install
# COPY . /app
# CMD ["npm", "start"]

# Use the official Node.js 14.21.3-alpine base image
FROM node:14.21.3-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which your Node.js app will run (if applicable)
# EXPOSE 5000

# Define the command to run your Node.js application
CMD ["npm", "start"]
