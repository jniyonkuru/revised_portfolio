# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG NODE_VERSION=22.21.0
ARG NGINX_VERSION=alpine3.22

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine AS builder

# Set working directory for all build stages.
WORKDIR /app

COPY package.json package-lock.json ./

RUN --mount=type=cache,target=/root/.npm npm ci

COPY . .

RUN npm run build


################################################################################
# Create a stage for installing production dependecies.
FROM nginxinc/nginx-unprivileged:${NGINX_VERSION} AS runner

USER nginx

COPY nginx.conf /etc/nginx/nginx.conf

COPY --chown=nginx:nginx  --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080

ENTRYPOINT [ "nginx","-c","/etc/nginx/nginx.conf" ]

# Run the application.
CMD ["-g","daemon off;"]
