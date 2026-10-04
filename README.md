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

## Pembaruan 5 Oktober 2026

- `assets/logo.png` dioptimalkan dari logo original terbaru yang diunggah pengguna. File original dan seluruh variasi logo tetap dipertahankan.
- `assets/logo-white.png` dioptimalkan dari variasi logo putih terbaru untuk footer gelap.
- `assets/business-network.webp`: ilustrasi AI yang dikompresi untuk web; bukan foto fasilitas nyata perusahaan.
- Transisi hero, reveal saat scroll, perpindahan panel harga, hover kartu, indikator posisi halaman, menu mobile, dan FAQ native. Preferensi `prefers-reduced-motion` dihormati. Tanpa JavaScript, semua konten/panel harga tetap terbaca.

### Harga simulasi

Rancangan broadband bisnis 50/100/300 Mbps: Rp700.000/Rp1.150.000/Rp2.500.000 per bulan. Nilai dibulatkan dari publikasi sales MyRepublic Rp703.741/Rp1.147.741/Rp2.479.741. Ini bukan tarif resmi Satelit atau verifikasi penawaran terkini MyRepublic di Jember. Publikasi sumber menyebut harga nett; simulasi Satelit sengaja menggunakan basis belum termasuk pajak/instalasi dan tidak menyalin benefit, SLA, atau kontrak sumber. Angka perlu diganti sesuai keputusan komersial perusahaan sebelum dijadikan penawaran resmi.

Sumber ditinjau 5 Oktober 2026:

- https://www.myrepublic.co.id/business — situs resmi, paket dan ketentuan umum; harga angka tidak tersedia dalam konten publik yang berhasil dibaca.
- https://www.sales-myrepublic.com/dedicated-internet-myrepublic/ — situs pemasaran, publikasi nominal paket. Judul halaman memakai kata dedicated, tetapi detail paket menyebut speed up to. Angka tidak digunakan sebagai tarif dedicated Satelit.

Dedicated, IIX/IX tetap menggunakan penawaran khusus karena tarifnya belum diberikan oleh pemilik bisnis.

### Ilustrasi

Dibuat dengan imagegen bawaan. Prompt: “Premium ISP B2B landing page illustration: futuristic 3D isometric business district, office towers and data-center building connected by luminous fiber paths to a central translucent cyan network hub with an orbital halo. Clean polished glass and metal, dark navy #061b35, electric blue #0074b9, cyan #1bb0da, restrained yellow #ffd20a accents. Generous dark margins; no text, logos, people, or watermark.”
