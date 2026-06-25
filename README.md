# GMC Web - Landing Page & Showcase Product

GMC Web adalah sebuah landing page premium yang dibangun menggunakan framework **Next.js** dan **Tailwind CSS v4**. Web ini dirancang khusus untuk memamerkan katalog produk GMC Elektronik (seperti Speaker, Kipas Angin, Kompor, dan Grill) dengan antarmuka modern, interaktif, serta performa yang optimal.

## Fitur Utama

- **Premium Card Product UI**: Desain card produk yang modern dengan background ber-tab custom menggunakan path SVG responsif dan efek _drop-shadow_ interaktif saat di-hover.
- **Background Removal Integration**: Seluruh aset gambar produk (kipas, kompor, grill, speaker) telah melalui pemrosesan menggunakan script Python (`Pillow`) untuk menghilangkan background putih sehingga berlatar belakang transparan (PNG) dan berbaur sempurna dengan tema gelap situs.
- **Navbar & Tab Synchronization**: Navigasi menu (SPEAKER, KIPAS, KOMPOR, GRILL) yang otomatis melakukan smooth-scroll ke bagian daftar produk dan langsung memilih tab kategori yang bersangkutan. Fitur ini juga mendukung inisialisasi hash URL (misal: `/#grill`).
- **Interactive Header Controls**: Tombol pencarian di header yang otomatis melakukan smooth-scroll dan memfokuskan kursor ke input pencarian produk utama, serta logo brand yang membersihkan URL hash dan melakukan scroll kembali ke atas.
- **Hero CTA Integration**: Tombol CTA utama ("Lihat Semua Produk") untuk navigasi langsung ke area katalog, serta spesifikasi dinamis yang terhubung ke modal detail.
- **Premium Responsive Footer**: Footer lengkap dengan info brand, kategori produk, navigasi perusahaan, tautan legalitas, serta tautan e-commerce & media sosial GMC (Instagram, TikTok, Shopee, Tokopedia) menggunakan custom SVG.
- **SEO & OpenGraph Optimized**: Konfigurasi metadata lengkap (Title, Description, Keywords, Robots) serta penyiapan OpenGraph dan Twitter Cards preview menggunakan image pratinjau yang dioptimasi.

## Struktur Teknologi

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 & Tailwind Animate
- **UI Components**: Shadcn UI (Base UI)
- **Icons**: Lucide React & Custom SVG
- **Language**: TypeScript
- **Linter & Formatter**: ESLint & Prettier

---

## Panduan Menjalankan Project Secara Lokal

Ikuti langkah-langkah di bawah ini untuk memasang dan menjalankan aplikasi ini di komputer lokal Anda.

### Prasyarat

Pastikan Anda sudah menginstal:

- [Node.js](https://nodejs.org/) (versi 18 ke atas direkomendasikan)
- [pnpm](https://pnpm.io/) (direkomendasikan) atau npm/yarn

### 1. Kloning Repositori

```bash
git clone <url-repository-gmc-web>
cd gmc-web
```

### 2. Instalasi Dependencies

Gunakan `pnpm` untuk memasang seluruh pustaka yang dibutuhkan:

```bash
pnpm install
```

_(Atau gunakan `npm install` / `yarn install` jika tidak menggunakan pnpm)_

### 3. Menjalankan Server Pengembangan (Dev Mode)

Jalankan server lokal pada mode development:

```bash
pnpm dev
```

_(Atau `npm run dev`)_

Buka browser Anda dan akses [http://localhost:3000](http://localhost:3000) (atau port lain yang tertera pada konsol terminal).

### 4. Membangun Aplikasi untuk Produksi (Production Build)

Untuk membuat kompilasi build produksi yang teroptimasi, jalankan:

```bash
pnpm build
```

Untuk menjalankan hasil build produksi secara lokal:

```bash
pnpm start
```

### 5. Memeriksa Kualitas Kode (Lint, Format, Typecheck)

Untuk menjalankan pemeriksaan linting, pengecekan format kode (Prettier), dan tipe TypeScript sekaligus:

```bash
pnpm run check
```
