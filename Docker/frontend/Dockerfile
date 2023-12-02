# Use an official Node.js runtime as a parent image
FROM node:18.15

# Set the working directory to /app
WORKDIR /home/node/app

# Copy the current directory contents into the container at /app
COPY . .

# Install any needed packages specified in package.json
RUN npm install



# Expose port 3000
EXPOSE 3000

# Define environment variable
ENV NODE_ENV=production

# Run the command to start the server
CMD ["npm", "start"]

