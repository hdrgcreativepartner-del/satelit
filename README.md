# PT Satelit Global Media

Landing page statis untuk pengenalan brand, layanan internet dedicated, serta konektivitas IIX & IX. Warna mengikuti logo perusahaan: biru dan kuning, dipadukan navy dan putih.

## Menjalankan lokal

Jalankan `python3 -m http.server 8080` di direktori proyek, lalu buka `http://localhost:8080`.

## GitHub Pages

Di **Settings → Pages**, pilih **Deploy from a branch**, branch **main**, direktori **/ (root)**, lalu simpan. URL yang diharapkan: https://hdrgcreativepartner-del.github.io/satelit/ .

## Mengubah konten

- `index.html`: seluruh teks, alamat, email, dan nomor kontak. Cari teks dalam tanda kurung siku untuk placeholder.
- `styles.css`: warna, tata letak, dan tampilan responsif.
- `script.js`: menu mobile dan tahun copyright.
- `assets/logo.png`: logo perusahaan.

Kontak belum ditautkan ke WhatsApp atau email karena data resmi belum diberikan. Semua tombol konsultasi menuju bagian kontak. Tidak ada form yang mengirim data, klaim SLA, harga, atau statistik pelanggan dummy.

Tanpa framework, proses build, font eksternal, tracker, atau dependensi runtime. Seluruh aset menggunakan path relatif agar kompatibel dengan GitHub Pages pada subdirektori.
