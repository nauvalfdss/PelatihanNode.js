-- 1. Tampilkan seluruh data pelanggan
SELECT *
FROM pelanggan;

-- 2. Tampilkan nama produk dan harga
SELECT nama_produk, harga
FROM produk;

-- 3. Tampilkan produk dengan harga di atas Rp500.000
SELECT *
FROM produk
WHERE harga > 500000;

-- 4. Tampilkan pelanggan yang berasal dari Jawa Barat
SELECT *
FROM pelanggan
WHERE provinsi = 'Jawa Barat';

-- 5. Hitung jumlah seluruh produk
SELECT COUNT(*) AS jumlah_produk
FROM produk;

-- 6. Tampilkan pesanan dengan status "Selesai"
SELECT *
FROM pesanan
WHERE status_pesanan='Selesai';

-- 7. Urutkan produk berdasarkan harga tertinggi
SELECT *
FROM produk
ORDER BY harga DESC;

-- 8. Hitung pengelompokkan total belanja dari setiap id_pesanan
SELECT
id_pesanan,
SUM(jumlah*harga_satuan) AS total
FROM detail_pesanan
GROUP BY id_pesanan;

-- 9. Tampilkan nama pelanggan beserta tanggal pesan
use ecommerce;
SELECT
p.nama_pelanggan,
ps.tanggal_pesanan
FROM pelanggan p
INNER JOIN pesanan ps
ON p.id_pelanggan=ps.id_pelanggan;

-- 10. Hitung total nilai setiap item produk pada detail pesanan, urutkan dari id_pesanan terkecil
SELECT
dp.id_pesanan,
p.nama_produk,
dp.jumlah,
dp.harga_satuan,
(dp.jumlah*dp.harga_satuan) AS total
FROM detail_pesanan dp
INNER JOIN produk p
ON dp.id_produk = p.id_produk
ORDER BY dp.id_pesanan;

-- 11. Tampilkan produk yang belum pernah dipesan
SELECT 
p.nama_produk, 
dp.id_pesanan
FROM produk p
LEFT JOIN detail_pesanan dp
on p.id_produk = dp.id_produk
where dp.id_pesanan is NULL;

-- 12. Hitung total pembelian setiap pelanggan
SELECT
pl.nama_pelanggan,
SUM(dp.jumlah*dp.harga_satuan) AS total_belanja
FROM pelanggan pl
INNER JOIN pesanan ps
ON pl.id_pelanggan=ps.id_pelanggan
INNER JOIN detail_pesanan dp
ON ps.id_pesanan=dp.id_pesanan
GROUP BY pl.nama_pelanggan;

-- 13. Tampilkan 5 pelanggan dengan transaksi terbesar
SELECT
pl.nama_pelanggan,
SUM(dp.jumlah*dp.harga_satuan) AS total_belanja
FROM pelanggan pl
INNER JOIN pesanan ps
ON pl.id_pelanggan=ps.id_pelanggan
INNER JOIN detail_pesanan dp
ON ps.id_pesanan=dp.id_pesanan
GROUP BY pl.nama_pelanggan
ORDER BY total_belanja DESC
limit 5;

-- 14. Hitung total penjualan setiap produk
SELECT
pr.nama_produk,
SUM(dp.jumlah) AS total_terjual,
SUM(dp.jumlah*dp.harga_satuan) AS omzet
FROM produk pr
JOIN detail_pesanan dp
ON pr.id_produk=dp.id_produk
GROUP BY pr.nama_produk;

-- 15. Hitung jumlah pesanan setiap pelanggan
SELECT
pl.nama_pelanggan,
COUNT(ps.id_pesanan) AS jumlah_pesanan
FROM pelanggan pl
LEFT JOIN pesanan ps
ON pl.id_pelanggan=ps.id_pelanggan
GROUP BY pl.nama_pelanggan;

-- 16. Tampilkan produk terlaris berdasarkan jumlah terjual
SELECT
pr.nama_produk,
SUM(dp.jumlah) AS jumlah_terjual
FROM produk pr
JOIN detail_pesanan dp
ON pr.id_produk=dp.id_produk
GROUP BY pr.nama_produk
ORDER BY jumlah_terjual DESC;

-- 17. Hitung omzet setiap kategori
SELECT
k.nama_kategori,
SUM(dp.jumlah*dp.harga_satuan) AS omzet
FROM kategori k
JOIN produk p
ON k.id_kategori=p.id_kategori
JOIN detail_pesanan dp
ON p.id_produk=dp.id_produk
GROUP BY k.nama_kategori;

-- 18. Tampilkan rata-rata harga produk tiap kategori
SELECT
k.nama_kategori,
AVG(p.harga) AS rata_rata_harga
FROM kategori k
JOIN produk p
ON k.id_kategori=p.id_kategori
GROUP BY k.nama_kategori;

-- 19. Hitung jumlah pelanggan setiap provinsi
SELECT
provinsi,
COUNT(*) AS jumlah_pelanggan
FROM pelanggan
GROUP BY provinsi;

-- 20. Tampilkan 5 produk dengan omzet terbesar
SELECT
pr.nama_produk,
SUM(dp.jumlah*dp.harga_satuan) AS omzet
FROM produk pr
JOIN detail_pesanan dp
ON pr.id_produk=dp.id_produk
GROUP BY pr.nama_produk
ORDER BY omzet DESC
LIMIT 5;

-- 21. Hitung total ongkir yang dibayarkan
SELECT
SUM(ongkir) AS total_ongkir
FROM pengiriman;

-- 22. Cari kurir yang paling sering digunakan
SELECT
k.nama_kurir,
COUNT(*) AS jumlah_pengiriman
FROM kurir k
JOIN pengiriman p
ON k.id_kurir=p.id_kurir
GROUP BY k.nama_kurir
ORDER BY jumlah_pengiriman DESC
LIMIT 1;

-- 23. Hitung lama pengiriman setiap pesanan
SELECT
id_pesanan,
DATEDIFF(tanggal_terima,tanggal_kirim) AS lama_pengiriman
FROM pengiriman;