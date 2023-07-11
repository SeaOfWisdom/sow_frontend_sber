# Start from the official node.js alpine base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy package.json and yarn.lock before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./sow_frontend/package.json ./sow_frontend/yarn.lock ./

# Install dependencies
RUN yarn install

# Copy all files
COPY ./sow_frontend .

# Expose the listening port of your app
EXPOSE 3000

# Command to run the app
CMD ["yarn", "start"]