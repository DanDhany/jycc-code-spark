# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

# Hanya copy file dependensi DULU
# Docker akan men-cache layer ini
COPY package.json ./
COPY bun.lockb ./
# Jika Anda juga punya package-lock.json, tambahkan di sini
# COPY package-lock.json ./ 

# Install dependensi
# Langkah ini HANYA akan berjalan jika package.json atau bun.lockb berubah
RUN npm install -g bun
RUN bun install

# SETELAH install, baru copy sisa kode sumber
# Jika hanya kode di 'src' yang berubah, Docker akan mulai dari sini
COPY . .

# Build aplikasi
RUN bun run build

# ---
# Stage 2: Serve static files (Bagian ini sudah bagus)
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copy hasil build dari stage 'builder'
COPY --from=builder /app/dist .

# Copy file statis lainnya dari folder 'public' di konteks build
COPY public/favicon.ico ./favicon.ico
COPY public/robots.txt ./robots.txt

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]