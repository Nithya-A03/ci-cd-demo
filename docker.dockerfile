# Use official Node.js 16 image
FROM node:16
# Set working directory inside the container
WORKDIR /app
# Copy all files from project folder to container


# Install dependencies
RUN npm install
# Start the app
CMD ["npm", "start"]
