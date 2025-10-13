# Jatim Youth Codepreneur Challenge (JYCC) Landing

A landing page built with Vite + React + TypeScript + Tailwind CSS + shadcn-ui.

## Tech Stack
- Vite
- React 18
- TypeScript
- Tailwind CSS
- shadcn-ui

## Development

Requirements:
- Node.js 18+ (disarankan 20)
- Bun (opsional, digunakan di Docker build)

Jalankan lokal:
```sh
npm install
npm run dev
```

## Production (Docker)

Build dan run:
```sh
# dari root project
docker compose up --build -d
# akses
http://localhost:8100
```

## Struktur Proyek
- `src/` – source code React
- `public/` – aset statis (logo, robots.txt, favicon)
- `Dockerfile` – multi-stage build (Bun untuk build, Nginx untuk serve statik)
- `docker-compose.yml` – menjalankan container production

## Lisensi
Hak cipta © Dinas Kominfo Jawa Timur & Universitas Surabaya. Semua hak dilindungi.
