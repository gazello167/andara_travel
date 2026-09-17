# Next.js Web Builder (Drag & Drop) — Starter

Konsep: halaman TIDAK di-hardcode per file. Setiap halaman adalah data JSON
di database yang di-render ulang oleh 1 komponen generik. Editor drag & drop
disediakan oleh library **Puck** (`@measured/puck`).

## Struktur folder

```
app/
  page.tsx                -> landing/petunjuk
  [slug]/page.tsx         -> RENDER PUBLIK untuk semua halaman (1 file, semua slug)
  edit/[slug]/page.tsx    -> EDITOR drag & drop untuk semua halaman
  api/pages/[slug]/route.ts -> GET (load) & PUT (save) data halaman

components/blocks/        -> Blok-blok yang bisa di-drag (Hero, TextBlock, dst)
  Hero.tsx
  TextBlock.tsx
  ButtonBlock.tsx
  ImageBlock.tsx

lib/
  puck-config.tsx          -> REGISTRY: daftar blok + field-field editornya
  prisma.ts                -> koneksi database

prisma/
  schema.prisma             -> model Page (kolom `content` = JSON hasil builder)
```

## Cara menambah blok baru

1. Bikin komponen di `components/blocks/NamaBlok.tsx`.
2. Daftarkan di `lib/puck-config.tsx`: tambah field-field yang bisa diedit
   user (text, textarea, select, number, radio, dll — sesuai dukungan Puck)
   dan `defaultProps`-nya.
3. Selesai — blok otomatis muncul di sidebar editor, bisa langsung di-drag.

**Tidak perlu bikin halaman baru untuk tiap konten.** Semua halaman lewat
`app/[slug]/page.tsx` dan `app/edit/[slug]/page.tsx` yang sudah generik.

## Cara jalanin

```bash
npm install
cp .env.example .env   # isi DATABASE_URL kamu
npx prisma migrate dev --name init
npm run dev
```

Lalu buka:
- `http://localhost:3000/edit/home` → editor drag & drop
- `http://localhost:3000/home` → hasil publikasi (setelah klik Publish)

## Next steps yang biasa ditambahkan

- **Auth** untuk halaman `/edit/*` (mis. NextAuth) supaya tidak sembarang
  orang bisa mengedit.
- **Image upload** (UploadThing / Cloudinary / S3) supaya field `src` di
  `ImageBlock` tidak perlu isi URL manual.
- **Daftar semua halaman** (admin dashboard) — query `prisma.page.findMany()`.
- **Draft vs Published** — kolom `published` sudah ada di schema, tinggal
  dipakai untuk preview sebelum go-live.
- **Custom/branded fields** — Puck field types bisa di-extend (color picker,
  rich text editor sungguhan seperti Tiptap, dsb).
