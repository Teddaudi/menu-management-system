# Stage 1: Build the application
FROM node:20.14.0 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Set up the production environment
FROM node:20.14.0

WORKDIR /app

COPY package.json ./

RUN npm install --only=production

COPY --from=build /app/dist ./dist

# Use JSON format for CMD to avoid potential issues
CMD ["npm", "run", "start:dev"]
