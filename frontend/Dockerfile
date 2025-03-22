# frontend/Dockerfile

# Build stage
FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Expose default Nginx port
EXPOSE 80

# Optional: Custom nginx config if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf
