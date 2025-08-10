# Use official Node.js 20 image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install all dependencies for development
RUN npm install

# Copy the rest of your code
COPY . /app

# Set environment variables (optional, override via docker-compose)
ENV PORT=5000

# Expose port
EXPOSE 5000

# Run app in dev mode with nodemon
CMD node index.js 
