function hitung(angka1, angka2, operasi) {
    console.log(`Menjalankan perhitungan untuk ${angka1} dan ${angka2} ....`);

    const hasil = operasi(angka1, angka2);
    console.log(`Hasilnya Adalah : ${hasil}`);
}

function tambah(a, b) {
    return a + b;
}

function kali(a, b) {
    return a * b;
}

hitung(10, 5, tambah);
hitung(10, 5, kali);