FROM  node:22.22.0-alpine AS builder
WORKDIR /app
COPY package.json ./

RUN npm install 
COPY . .
RUN npm run build

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist  /usr/share/nginx/html
EXPOSE 8080

CMD ["nginx","-g","daemon off;"]

