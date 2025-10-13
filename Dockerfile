# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json bun.lockb ./
COPY . .
RUN npm install -g bun && bun install
RUN bun run build

# Stage 2: Serve static files
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist .
COPY public/favicon.ico ./favicon.ico
COPY public/robots.txt ./robots.txt
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
