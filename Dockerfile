# Use Node.js 16 as the base image to build the app
FROM node:16.20.2 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY ./package*.json ./

# Install the app dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the app files
COPY ./ ./

# Build the app for production
RUN npm run build

# Use a lightweight web server (nginx) to serve the built app
FROM nginx:alpine

# Copy the built Vue app from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Add a custom NGINX configuration to redirect all requests to the Vue app
COPY nginx.conf /etc/nginx/default.conf

# Expose port 80 for the web server
EXPOSE 80

# Start the NGINX server to serve the app
CMD ["nginx", "-g", "daemon off;"]
