# TelanaNime 🌌

Platform streaming anime modern dengan fitur otomatisasi sinkronisasi, kualitas visual HD, dan pengalaman pengguna yang premium (iQIYI-inspired).

## Fitur Unggulan 🚀

### 1. Smart Scraping & Cloud Sync
- **Automated Sync**: Sinkronisasi data otomatis setiap 1 jam dari **Kuramanime** ke database PostgreSQL.
- **Master Sync Engine**: Sistem "The Great Reset" yang memastikan akurasi jadwal rilis (Senin-Minggu) dan kelengkapan data musim (Winter 2026, Fall 2025).
- **Cloud History**: Riwayat tontonan tersimpan di cloud (Postgres), memungkinkan sinkronisasi *Continue Watching* antar perangkat.
- **Instant Discovery**: Fitur pencarian instan pada Navbar dengan hasil (poster & judul) secara *real-time* saat mengetik.

### 2. High-Fidelity Streaming Experience
- **True HD Visuals**: Bypass otomatis kompresi CDN dan filter WordPress Photon untuk mendapatkan gambar asli yang tajam.
- **Advanced Video Player**:
  - **Resolution Selector**: Pilihan kualitas video dinamis.
  - **Buffering & Syncing Indicators**: Visual feedback yang jelas saat memproses stream node.
  - **Keyboard Shortcuts**: Gunakan `Space` untuk Play/Pause, serta `Panah Kiri/Kanan` untuk skip 10 detik.
  - **Auto-Play Next Episode**: Hitung mundur 10 detik dan transisi otomatis ke episode berikutnya.
  - **Resume Play**: Notifikasi cerdas untuk melanjutkan tontonan dari detik terakhir.

### 3. User-Centric Design
- **iQIYI Style UI**: Antarmuka premium dengan tema *Deep Black* dan aksen *Sky Blue*.
- **Japan & China Filtering**: Filter cerdas yang memisahkan Anime Jepang dan Donghua (China) dengan badge visual unik.
- **Mobile Friendly & PWA**: Website dapat di-install sebagai aplikasi di HP (PWA) dengan navigasi *Bottom Bar* yang intuitif.
- **Personal Watchlist**: Simpan anime favorit Anda ke daftar tontonan (Bookmarks) yang terhubung ke akun user.

## Teknologi & Arsitektur 🛠️

- **Frontend**: Next.js 16 (Turbopack), Tailwind CSS, Framer Motion, Lucide React.
- **Backend & Scraper**: Playwright (Headless Browser), Axios, Cheerio, Node-cron.
- **Database**: PostgreSQL (Docker), Prisma ORM, PostgreSQL Adapters.
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
   npx prisma generate
   npx prisma migrate dev
   ```
5. **Master Sync Data**:
   ```bash
   node scripts/master-sync.js
   ```
6. **Jalankan Aplikasi**:
   ```bash
   npm run dev
   ```

---
Built with 💙 by **Telana Team**
Project ini dikembangkan untuk tujuan edukasi dan pengembangan portofolio.
