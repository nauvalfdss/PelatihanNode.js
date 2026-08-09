// loopingAktivitas.js

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 2 === 0) {
    console.log(i + " - Mendapat Sertifikat");
  } else if (i % 3 === 0 && i % 2 !== 0) {
    console.log(i + " - Mengikuti Uji Kompetensi");
  } else if (i % 2 === 0) {
    console.log(i + " - Mengikuti Pelatihan");
  } else {
    console.log(i + " - Apel Pagi");
  }
}