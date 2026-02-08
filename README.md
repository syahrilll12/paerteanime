# TelanaNime 🌌

Platform streaming anime modern dengan fitur otomatisasi sinkronisasi, kualitas visual HD, dan pengalaman pengguna yang premium (iQIYI-inspired).

## Fitur Unggulan 🚀

### 1. Smart Scraping & Cloud Sync
- **Automated Sync**: Sinkronisasi data otomatis setiap 1 jam dari sumber terpercaya (Samehadaku) ke database PostgreSQL.
- **Cloud History**: Riwayat tontonan tersimpan di cloud (Postgres), memungkinkan sinkronisasi *Continue Watching* antar perangkat.
- **Instant Discovery**: Fitur pencarian instan pada Navbar yang menampilkan hasil (poster & judul) secara *real-time* saat mengetik.

### 2. High-Fidelity Streaming Experience
- **HD Visual Overhaul**: Bypass otomatis kompresi CDN untuk menampilkan poster dan latar belakang dalam resolusi tajam.
- **Advanced Video Player**:
  - **Resolution Selector**: Pilihan kualitas video (1080p, 720p, 480p).
  - **Smart Buffer Indicator**: Loading state yang akurat saat *seeking* atau koneksi tidak stabil.
  - **Keyboard Shortcuts**: Gunakan `Space` untuk Play/Pause, serta `Panah Kiri/Kanan` untuk skip 10 detik.
  - **Auto-Play Next Episode**: Hitung mundur dan transisi otomatis ke episode berikutnya saat video selesai.
  - **Resume Play**: Notifikasi cerdas untuk melanjutkan tontonan dari detik terakhir.

### 3. User-Centric Design
- **iQIYI Style UI**: Antarmuka premium dengan tema *Deep Black* dan aksen *Sky Blue*.
- **Mobile Friendly & PWA**: Website dapat di-install sebagai aplikasi di HP (PWA) dengan navigasi *Bottom Bar* yang intuitif.
- **Personal Watchlist**: Simpan anime favorit Anda ke daftar tontonan (Bookmarks) yang terhubung ke akun user.
- **Dynamic Content Rows**:
  - Global Live Updates (Today/Weekly filter).
  - Top 10 Global Trending Chart.
  - Season Spotlight & Flashback Archives.

## Teknologi & Arsitektur 🛠️

- **Frontend**: Next.js 16 (Turbopack), Tailwind CSS, Framer Motion, Lucide React.
- **Backend & Scraper**: Playwright (Headless Browser), Axios, Cheerio, Node-cron.
- **Database**: PostgreSQL (Docker), SQLite (Local Cache), Prisma ORM.
- **Authentication**: NextAuth.js v5 (Google OAuth & Credentials).

## Cara Instalasi & Menjalankan 🚀

1. **Persiapan**: Pastikan Docker sudah terinstall dan berjalan.
2. **Setup Database**:
   ```bash
   docker-compose up -d
   ```
3. **Install Dependensi**:
   ```bash
   npm install --legacy-peer-deps
   ```
4. **Migrasi Prisma**:
   ```bash
   npx prisma migrate dev
   ```
5. **Jalankan Aplikasi**:
   ```bash
   npm run dev
   ```

---
Built with 💙 by **Telana Team**
Project ini dikembangkan untuk tujuan edukasi dan pengembangan portofolio.
