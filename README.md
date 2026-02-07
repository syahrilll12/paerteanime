# TelanaNime 🌌

Platform streaming anime modern dengan fitur otomatisasi sinkronisasi, kualitas visual HD, dan pengalaman pengguna yang premium.

## Fitur Utama ✨

- **Smart Scraping System**: Mengintegrasikan data secara *real-time* dari Samehadaku menggunakan Playwright dan Cheerio.
- **High-Definition Visuals**: Bypass otomatis CDN kompresi untuk memastikan poster anime selalu tampil tajam (HD).
- **Advanced Video Player**:
  - Navigasi Keyboard (Maju/Mundur 10 detik, Play/Pause).
  - Indikator Buffering & Sinkronisasi Node.
  - Pemilihan Resolusi Otomatis (Default ke kualitas tertinggi).
  - **Resume Play**: Mengingat posisi terakhir tontonan Anda.
- **Dynamic Content**:
  - Filter Live Updates (Today & Weekly).
  - Top 10 Global Trending Chart.
  - Season Archives (Winter 2026, Fall 2025, dll).
  - Rekomendasi berdasarkan popularitas data nyata.
- **Persistent Storage**: Menggunakan PostgreSQL (Docker) dan SQLite untuk caching link streaming dan daftar episode.
- **Automated Sync**: Scheduler otomatis setiap 1 jam untuk memperbarui daftar anime terbaru.

## Teknologi yang Digunakan 🛠️

- **Frontend**: Next.js 15+, Tailwind CSS, Framer Motion, Lucide React.
- **Backend**: Next.js API Routes, Playwright (Headless Browser), Axios, Cheerio.
- **Database**: PostgreSQL (Docker), SQLite (Local Cache), Prisma ORM.
- **DevOps**: Docker Compose, Node-cron (Scheduler).

## Cara Menjalankan Project 🚀

### 1. Prasyarat
- Node.js installed
- Docker & Docker Compose installed

### 2. Inisialisasi Database
Jalankan PostgreSQL menggunakan Docker:
```bash
docker-compose up -d
```

### 3. Instalasi Dependensi
```bash
npm install
```

### 4. Sinkronisasi Database
```bash
npx prisma generate
npx prisma migrate dev
```

### 5. Jalankan Mode Development
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## Disclaimer ⚖️
Project ini dibuat untuk tujuan edukasi dan pengembangan portofolio. Seluruh konten video dan gambar merupakan hak milik dari sumber aslinya (Samehadaku). Kami tidak menyimpan file video di server kami.

---
Built with 💙 by **Telana Team**
