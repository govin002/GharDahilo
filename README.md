# GharDahilo
E-Commerce  website

Here We are using vite , 
So, use npm run dev to deploy in your system.
#favicon
bg-color #612690
text-color #fff
-----------------------------------
# configuring the vit for Docker 
------------------------------------
server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    },
  }
---------------------
# Creating the docker file 
------------------------
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port for the Vite development server
EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run", "dev"]
------------------------------------------------
# setting up the Docker file 
------------------------------------------------
 

--------------------------------------
# firstly  I am simply  building the Login / Sign up page 