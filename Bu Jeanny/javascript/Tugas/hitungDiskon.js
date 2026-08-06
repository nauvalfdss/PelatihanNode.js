// Harga makanan
const nasiGoreng = 25000;
const mieGoreng = 22000;
const capcay = 32000;

// Pembayaran pelanggan
const bayar = 100000;

// Hitung total harga sebelum diskon
const totalHarga = nasiGoreng + mieGoreng + capcay;

// Hitung diskon 10%
const diskon = totalHarga * 0.10;

// Hitung total setelah diskon
const totalBayar = totalHarga - diskon;

// Hitung kembalian
const kembalian = bayar - totalBayar;

// Menampilkan hasil
console.log("Harga Nasi Goreng    = Rp.", nasiGoreng);
console.log("Harga Mie Goreng     = Rp.", mieGoreng);
console.log("Harga Capcay         = Rp.", capcay);
console.log("Harga Total          = Rp.", totalHarga);
console.log("Diskon 10%           = Rp.", diskon);
console.log("Harga Setelah Diskon = Rp.", totalBayar);
console.log("Pembayaran           = Rp.", bayar);
console.log("Kembalian            = Rp.", kembalian);