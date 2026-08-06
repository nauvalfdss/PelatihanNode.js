// Harga barang
const headset = 225000;
const mouse = 150000;
const keyboard = 350000;

// Uang pembayaran
const pembayaran = 800000;

// Menghitung total belanja
const totalBelanja = headset + mouse + keyboard;

// Menentukan diskon
let diskonPersen;

if (totalBelanja < 250000) {
    diskonPersen = 0;
} else if (totalBelanja >= 250000 && totalBelanja <= 499999) {
    diskonPersen = 5;
} else if (totalBelanja >= 500000 && totalBelanja <= 799999) {
    diskonPersen = 10;
} else {
    diskonPersen = 15;
}

// Menghitung nilai diskon
const nilaiDiskon = totalBelanja * (diskonPersen / 100);

// Menghitung total setelah diskon
const totalBayar = totalBelanja - nilaiDiskon;

// Menghitung kembalian
const kembalian = pembayaran - totalBayar;

// Menampilkan hasil
console.log("===== Rincian Pembelian =====");
console.log("Headset   = Rp.", headset);
console.log("Mouse     = Rp.", mouse);
console.log("Keyboard  = Rp.", keyboard);
console.log("Total Belanja = Rp.", totalBelanja);
console.log("Diskon        =", diskonPersen + "%");
console.log("Total Setelah Diskon = Rp.", totalBayar);
console.log("Pembayaran   = Rp.", pembayaran);
console.log("Kembalian    = Rp.", kembalian);