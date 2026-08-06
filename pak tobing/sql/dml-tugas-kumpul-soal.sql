/*============================================================================================
Anda diberikan file SQL yang memuat perintah :
- CREATE DATABASE
- USE DATABASE
- CREATE TABLE
- INSERT INTO 
Tugas Anda :
1. Copy paste isi file SQL tersebut dan Execute di Workbench anda.
2. Berikan jawaban tepat di bawah setiap soal permintaan no. 1 s/d 25 di bawah ini
3. Setelah anda menjawab soal permintaan, simpan semua perintah 1 s/d 25 dalam file SQL
4. Kirim jawaban anda ke https://bit.ly/linkdrivePBLWebBatch3-2026 dengan terlebih dahulu
   membuat folder SQL di nama anda masing-masing

                  S E L A M A T   M E N G E R J A K A N !!!
===============================================================================================*/
-- Muhammad Nauval Firdaus

-- 1. Tampilkan seluruh data pelanggan.
select * from pelanggan;

-- 2. Tampilkan nama pelanggan, kota, dan provinsi pelanggan.
select nama_pelanggan, kota, provinsi from pelanggan;

-- 3. Tampilkan seluruh data produk yang memiliki stok lebih dari 20 unit.
select nama_produk, kategori_produk, harga, stok from produk where stok > 20;

-- 4. Tampilkan nama produk beserta harga produk, urutkan dari harga tertinggi ke harga terendah.
select nama_produk, harga from produk order by harga desc;

-- 5. Tampilkan seluruh data sales yang memiliki target penjualan lebih dari Rp70.000.000.
select * from sales where target_penjualan > 70000000;

-- 6. Tampilkan seluruh transaksi penjualan yang menggunakan metode pembayaran Transfer.
select * from penjualan where metode_pembayaran = 'Transfer';

-- 7. Hitung jumlah seluruh pelanggan yang terdaftar.
select count(*) as jumlah_pelanggan from pelanggan;

-- 8. Tampilkan seluruh transaksi dengan status Selesai, diurutkan berdasarkan tanggal terbaru.
select * from penjualan where status_penjualan = 'Selesai' order by tanggal_penjualan asc;

-- 9.  Hitung jumlah transaksi pada bulan Februari 2025.
SELECT penjualan.tanggal_penjualan, SUM(detail_penjualan.jumlah) AS total_barang_terjual, 
       COUNT(DISTINCT penjualan.id_penjualan) AS total_transaksi
FROM penjualan 
JOIN detail_penjualan ON penjualan.id_penjualan = detail_penjualan.id_penjualan 
WHERE penjualan.tanggal_penjualan LIKE '2025-02-%';

-- 10. Tampilkan nama pelanggan beserta tanggal penjualan.
select pelanggan.nama_pelanggan, penjualan.tanggal_penjualan from pelanggan join penjualan on pelanggan.id_pelanggan = penjualan.id_pelanggan;

-- 11. Tampilkan nama pelanggan beserta nama sales dalam melakukan transaksi
select pelanggan.nama_pelanggan, sales.nama_sales, penjualan.status_penjualan 
from penjualan inner join pelanggan on penjualan.id_pelanggan = pelanggan.id_pelanggan
inner join sales on penjualan.id_sales = sales.id_sales;

-- 12. Tampilkan detail transaksi yang berisi: ID Penjualan, Nama Pelanggan, Nama Produk, Jumlah, Harga Produk
select penjualan.id_penjualan, pelanggan.nama_pelanggan, produk.nama_produk, detail_penjualan.jumlah, produk.harga 
from detail_penjualan inner join penjualan on detail_penjualan.id_penjualan = penjualan.id_penjualan
inner join pelanggan on penjualan.id_pelanggan = pelanggan.id_pelanggan
inner join produk on detail_penjualan.id_produk = produk.id_produk;

-- 13. Hitung total nilai penjualan setiap transaksi : (Total_penjualan = jumlah × harga produk)
select detail_penjualan.id_detail, sum(detail_penjualan.jumlah*produk.harga) 
 as total_penjualan from detail_penjualan inner join penjualan on detail_penjualan.id_penjualan = penjualan.id_penjualan
 inner join produk on detail_penjualan.id_produk = produk.id_produk
 group by detail_penjualan.id_penjualan;

-- 14. Hitung jumlah transaksi setiap sales (group berdasarkan nama_sales).
SELECT sales.nama_sales, SUM(detail_penjualan.jumlah) AS total_barang_terjual, 
       COUNT(DISTINCT penjualan.id_penjualan) AS jumlah_transaksi
FROM penjualan 
inner JOIN detail_penjualan ON penjualan.id_penjualan = detail_penjualan.id_penjualan 
inner join sales on penjualan.id_sales = sales.id_sales
group by detail_penjualan.id_penjualan;


-- 15. Hitung total omzet setiap sales (group berdasarkan nama_sales).
select sales.nama_sales, sum(detail_penjualan.jumlah*produk.harga) 
 as total_omzet from detail_penjualan inner join penjualan on detail_penjualan.id_penjualan = penjualan.id_penjualan
  inner join produk on detail_penjualan.id_produk = produk.id_produk
 inner join sales on penjualan.id_sales = sales.id_sales
  group by sales.id_sales;


-- 16. Tampilkan sales dengan omzet terbesar.
select sales.nama_sales, sum(detail_penjualan.jumlah*produk.harga) 
 as total_omzet from detail_penjualan inner join penjualan on detail_penjualan.id_penjualan = penjualan.id_penjualan
  inner join produk on detail_penjualan.id_produk = produk.id_produk
 inner join sales on penjualan.id_sales = sales.id_sales
  group by sales.id_sales
  limit 1;


-- 17. Hitung total pembelian setiap pelanggan.
select pelanggan.nama_pelanggan,  sum(detail_penjualan.jumlah*produk.harga) 
 as total_omzet from detail_penjualan inner join penjualan on detail_penjualan.id_penjualan = penjualan.id_penjualan
  inner join produk on detail_penjualan.id_produk = produk.id_produk
  inner join pelanggan on penjualan.id_pelanggan = pelanggan.id_pelanggan
   group by pelanggan.id_pelanggan;
  

-- 18. Tampilkan pelanggan dengan total pembelian terbesar.
select pelanggan.nama_pelanggan,  sum(detail_penjualan.jumlah*produk.harga) 
 as total_omzet from detail_penjualan inner join penjualan on detail_penjualan.id_penjualan = penjualan.id_penjualan
  inner join produk on detail_penjualan.id_produk = produk.id_produk
  inner join pelanggan on penjualan.id_pelanggan = pelanggan.id_pelanggan
   group by pelanggan.id_pelanggan
   limit 1;


-- 19. Hitung total unit produk yang terjual (Group berdasarkan nama_produk)
-- produk dan detail_penjualan
select produk.nama_produk, sum(detail_penjualan.jumlah) as total_produk_terjual
from produk inner join detail_penjualan on produk.id_produk = detail_penjualan.id_produk
group by detail_penjualan.id_produk;

-- 20. Tampilkan 5 produk terlaris.
select produk.nama_produk, sum(detail_penjualan.jumlah*produk.harga) as omzet 
from produk join detail_penjualan on produk.id_produk = detail_penjualan.id_produk
group by produk.nama_produk
order by omzet desc
limit 5;


-- 21. Hitung omzet setiap produk.
select produk.nama_produk, sum(detail_penjualan.jumlah*produk.harga) as omzet 
from produk join detail_penjualan on produk.id_produk = detail_penjualan.id_produk
group by produk.nama_produk;

-- 22. Tampilkan nama pelanggan beserta tanggal transaksi (Group berdasarkan kategori_produk)
select pelanggan.nama_pelanggan, penjualan.tanggal_penjualan
from detail_penjualan inner join penjualan on detail_penjualan.id_penjualan = penjualan.id_penjualan
  inner join produk on detail_penjualan.id_produk = produk.id_produk
  inner join pelanggan on penjualan.id_pelanggan = pelanggan.id_pelanggan
   group by produk.kategori_produk;

-- 23. Tampilkan pelanggan yang belum pernah membeli.
select pelanggan.id_pelanggan, pelanggan.nama_pelanggan
from pelanggan
left join penjualan on pelanggan.id_pelanggan = penjualan.id_pelanggan
where penjualan.id_pelanggan;


-- 24. Tampilkan sales yang belum pernah melakukan penjualan.
select sales.id_sales, sales.nama_sales
 from sales 
left join penjualan on sales.id_sales = penjualan.id_sales
where penjualan.id_sales is null;

-- 25. Tampilkan produk yang belum pernah terjual.
select produk.id_produk, produk.nama_produk
 from produk
 left join detail_penjualan on produk.id_produk = detail_penjualan.id_produk
 where detail_penjualan.id_penjualan is null;

