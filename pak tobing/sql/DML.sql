-- INSERT SINGLE DATA

/*INTO kategori (nama_kategori) VALUES ('makanan');
INSERT INTO kategori (nama_kategori) VALUES ('minuman');
INSERT INTO kasir (nama_kasir, no_hp, alamat) VALUES ('Kocak gaming', '086138724', 'jalan kocak gaming');

-- INSERT MULTIPLE DATA
INSERT INTO produk (id_kategori, nama_produk, harga_jual)
VALUES
(1, 'Roti Bakar', 10000),
(1, 'Mie Ayam', 20000),
(2, 'Es Teh Manis', 8000),
(2, 'Es Jeruk Peras', 8000);


-- GET ALL DATA FROM TABLE
SELECT * FROM produk;
SELECT * FROM kategori;

-- GET ALL DATA BY ORDER FROM TABLE
SELECT * FROM produk ORDER BY id_produk DESC;
SELECT * FROM produk ORDER BY id_produk ASC;

-- SEARCH DATA
SELECT * FROM produk WHERE id_produk = 3 OR id_produk=1;*/


-- DML

-- INSERT INTO nama_tabel (kolom1, kolom2) VALUES (nilai1, nilsi2)
-- INSERT SINGLE DATA

INSERT INTO kategori(nama_kategori) VALUES 
('Sembako'),
('ATK'),
('Elektronik');

-- INERT MULTIPLE DATA
INSERT INTO kategori(nama_kategori) VALUES 
('Buah'),
('Perawatan'),
('Kosmetik'),
('Makanan'),
('Minuman'),
('Sabun'),
('Pakaian');
SELECT * FROM kategori;

SELECT * FROM kategori order by id_kategori;

INSERT INTO produk(id_kategori, nama_produk, harga_jual) VALUES 
(8,'Beras Ramos 5 KG',70000),
(2,'Teh Botol',7000),
(2,'Air Mineral',5000),
(10,'Lampu LED 10 Watt',35000),
(9,'Buku Tulis',6000),
(5,'Sabun Mandi',12000),
(1,'Keripik Kentang',15000),
(1,'Nugget Ayam',45000),
(8,'Garam',5000),
(6,'Apel Fuji',25000);
SELECT * FROM kategori;
SELECT * FROM produk;


INSERT INTO kasir(nama_kasir, no_hp, alamat) VALUES
('Andi','081234567890','Bandung'),
('Budi','081234567891','Jakarta'),
('Citra','081234567892','Bekasi'),
('Dina','081234567893','Bogor'),
('Eka','081234567894','Depok'),
('Fajar','081234567895','Bandung'),
('Gina','081234567896','Garut'),
('Hendra','081234567897','Tasikmalaya'),
('Indah','081234567898','Cirebon'),
('Joko','081234567899','Sukabumi');

INSERT INTO stok(id_produk, stok_masuk, stok_keluar, stok_tersedia) VALUES
(1,100,20,80),
(2,150,40,110),
(3,200,30,170),
(4,70,10,60),
(5,120,50,70),
(6,90,20,70),
(7,80,25,55),
(8,100,30,70),
(9,130,60,70),
(10,150,20,130);

INSERT INTO penjualan_header(id_kasir, total_transaksi) VALUES
(1,85000),
(2,120000),
(3,76000),
(4,98000),
(5,150000),
(6,50000),
(7,180000),
(8,97000),
(9,45000),
(10,210000);

INSERT INTO penjualan_detail(id_penjualan, id_produk, jumlah, harga, subtotal) VALUES
(1,1,1,78000,78000),
(2,2,5,7000,35000),
(3,3,4,5000,20000),
(4,4,2,35000,70000),
(5,5,10,6000,60000),
(6,6,3,12000,36000),
(7,7,2,15000,30000),
(8,8,1,45000,45000),
(9,9,6,5000,30000),
(10,10,4,25000,100000);

select * from kasir;
select * from kategori;
select * from produk;
select * from penjualan_detail;
select * from penjualan_header;
select * from stok;

select nama_kasir, alamat from kasir;

select nama_produk, harga_jual from produk where harga_jual > 10000;
select * from produk where harga_jual > 6000 and harga_jual <= 16000;

-- Menampilkan seluruh data
SELECT * FROM kategori;

-- Menampilkan produk dengan kolom tertentu
SELECT nama_produk, status_produk FROM produk;

-- Menampilkan data produk di atas  20.000
SELECT * FROM produk
WHERE harga_jual > 20000;

-- Menampilkan kasir yang berasal dari Bandung.
SELECT * FROM kasir
WHERE alamat='Bandung';

-- Menampilkan transaksi tanggal tertentu.
SELECT * FROM penjualan_header
WHERE DATE(tanggal_penjualan)='2026-07-05';

-- Menampilkan produk yang diawali huruf A.
SELECT * FROM produk
WHERE nama_produk LIKE 'A%';

-- Menampilkan kasir yang memiliki nama mengandung huruf a.
SELECT * FROM kasir
WHERE nama_kasir LIKE '%a%';

select	* from penjualan_header;

update penjualan_header set id_kasir = 2 where id_penjualan = 4 or id_penjualan = 8;

-- Menampilkan produk dengan harga antara 10.000 sampai 50.000.
SELECT * FROM produk
WHERE harga_jual
BETWEEN 10000 AND 50000;

-- Mengurutkan produk dari harga tertinggi.
SELECT * FROM produk
ORDER BY harga_jual DESC;

-- Menghitung total transaksi setiap kasir.
SELECT id_kasir, SUM(total_transaksi) total_penjualan
FROM penjualan_header
GROUP BY id_kasir;

update kasir set nama_kasir = 'Citra Gema' where id_kasir = 3;
select * from kasir;

-- delete from nama_tabel where kondisi;

select * from penjualan_header;
delete from kasir where id_kasir = 3;	

create index idx_kasir on kasir(nama_kasir);
select * from kasir where nama_kasir = 'Joko';

select* from produk;
-- inner join produk dan kategori
select produk.id_produk, produk.nama_produk, kategori.id_kategori, kategori.nama_kategori 
from kategori join produk on kategori.id_kategori = produk.id_kategori;

-- inner join produk dan kategori
select produk.id_produk, produk.nama_produk, produk.harga_jual,kategori.id_kategori, kategori.nama_kategori 
from produk join kategori on produk.id_kategori = kategori.id_kategori;

-- inner join kategori, produk, stok
select produk.id_produk, kategori.nama_kategori, produk.nama_produk, produk.harga_jual, stok.stok_tersedia 
from produk inner join kategori on produk.id_kategori = kategori.id_kategori
inner join stok on produk.id_produk = stok.id_produk;

-- inner join join kategori, produk, stok harga > 15000 dan stok < 100
select produk.id_produk, kategori.nama_kategori, produk.nama_produk, produk.harga_jual, stok.stok_tersedia 
from produk inner join kategori on produk.id_kategori = kategori.id_kategori
inner join stok on produk.id_produk = stok.id_produk where produk.harga_jual > 15000 and stok.stok_tersedia < 100;

-- table baru view untuk inner join kategori dan produk
create view vw_kategori_produk
as
select produk.id_produk, produk.nama_produk, produk.harga_jual,kategori.id_kategori, kategori.nama_kategori 
from produk join kategori on produk.id_kategori = kategori.id_kategori;

-- table bru view untuk inner join kategori, produk dan stok
create view vw_kategori_produk_stok
as
select produk.id_produk, kategori.nama_kategori, produk.nama_produk, produk.harga_jual, stok.stok_tersedia 
from produk inner join kategori on produk.id_kategori = kategori.id_kategori
inner join stok on produk.id_produk = stok.id_produk;


-- table baru view untuk inner join join kategori, produk, stok harga > 15000 dan stok < 100
create view vw_produk_stok_kategori
as
select produk.id_produk, kategori.nama_kategori, produk.nama_produk, produk.harga_jual, stok.stok_tersedia 
from produk inner join kategori on produk.id_kategori = kategori.id_kategori
inner join stok on produk.id_produk = stok.id_produk where produk.harga_jual > 15000 and stok.stok_tersedia < 100;

select * from penjualan_header;
select * from kasir;

-- join tabel penjualan_header dengan tabel kasir dan hasil joinnya simpan ke vw_penjualan_kasir
-- id_penjualan, tanggal penjualan, nama_kasir, alamat, total transaksi
select penjualan_header.id_penjualan, penjualan_header.tanggal_penjualan, kasir.id_kasir, kasir.nama_kasir, kasir.alamat, sum(total_transaksi)
 from	penjualan_header join kasir on penjualan_header.id_kasir = kasir.id_kasir;
 
 
--  Day 2 pak tobing 31/07/2026

-- Inner join : Menampilkan Stok Seluruh Produk
select p.nama_produk, s.stok_masuk, s.stok_keluar, s.stok_tersedia
from produk p inner join stok s on p.id_produk = s.id_produk;

-- Join Empat Tabel : Menampilkan Laporan Penjualan Lengkap 
select ph.id_penjualan, ph.tanggal_penjualan, k.nama_kasir, p.nama_produk, pd.jumlah, pd.harga, pd.subtotal
from penjualan_header ph  inner join kasir k on ph.id_kasir = k.id_kasir 
inner join penjualan_detail pd on ph.id_penjualan = pd.id_penjualan
inner join produk p on pd.id_produk = p.id_produk
order by ph.id_penjualan;

-- Join dengan Where : Menampilkan Transaksi yang dilakukan Kasir Andi.
select ph.id_penjualan, ph.tanggal_penjualan, k.nama_kasir, ph.total_transaksi
from penjualan_header ph inner join kasir k on ph.id_kasir = k.id_kasir
where k.nama_kasir = 'Andi';

-- Join dengan Group By : Menghitung Total nilai Penjualan Setiap Kasir.
select k.nama_kasir, sum(ph.total_transaksi) as total_penjualan
from kasir k inner join penjualan_header ph on k.id_kasir = ph.id_kasir
group by k.nama_kasir;

-- Join dengan Having : Menampilkan Kasir yan memiliki total transaksi lebih dari Rp100,ooo.
select k.nama_kasir, sum(ph.total_transaksi) as total_penjualan
from kasir k inner join penjualan_header ph on k.id_kasir = ph.id_kasir
group by k.nama_kasir
having sum(ph.total_transaksi) > 100000;

-- Join dengan Where group by having : Menampilkan kasir yang memiliki total transaksi lebih dari Rp100.000.
select k.nama_kasir, sum(ph.total_transaksi) as total_penjualan
from kasir k inner join penjualan_header ph on k.id_kasir = ph.id_kasir
where year(tanggal_penjualan) = 2026
group by k.nama_kasir
having sum(ph.total_transaksi) > 100000;

--  Left Join : Memprioritasi integrasi tabel uatama kiri
-- Logika mengambil semua baris dari tabel kiri, jika tidak ada kecocokan ditabel kanan, sistem akan menyisipakn nilai null
select p.id_produk, p.nama_produk, s.stok_masuk, s.stok_keluar, s.stok_tersedia
from produk p left join stok s on p.id_produk = s.id_produk;

-- Right join : Memprioritasi integrasi tabl transaksional kanan
-- Logika : Mengambil semua baris dari tabel kanan. data transaksional tak bertuan akan mendapat nilai null disisi refrensi kiri
select p.nama_produk, s.stok_masuk, s.stok_keluar, s.stok_tersedia
from produk p right join stok s on p.id_produk = s.id_produk;


