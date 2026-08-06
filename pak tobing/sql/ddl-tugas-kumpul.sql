CREATE DATABASE db_penjualan;

USE db_penjualan;

CREATE TABLE pelanggan (
    id_pelanggan INT AUTO_INCREMENT PRIMARY KEY,
    nama_pelanggan VARCHAR(100) NOT NULL,
    jenis_kelamin ENUM('L','P') NOT NULL,
    kota VARCHAR(100),
    provinsi VARCHAR(100),
    tanggal_daftar DATE
);

CREATE TABLE sales (
    id_sales INT AUTO_INCREMENT PRIMARY KEY,
    nama_sales VARCHAR(100) NOT NULL,
    wilayah VARCHAR(100),
    no_hp VARCHAR(20),
    target_penjualan DECIMAL(15,2)
);

CREATE TABLE produk (
    id_produk INT AUTO_INCREMENT PRIMARY KEY,
    nama_produk VARCHAR(100) NOT NULL,
    kategori_produk VARCHAR(50),
    harga DECIMAL(12,2) NOT NULL,
    stok INT NOT NULL
);

CREATE TABLE penjualan (
    id_penjualan INT AUTO_INCREMENT PRIMARY KEY,
    id_pelanggan INT NOT NULL,
    id_sales INT NOT NULL,
    tanggal_penjualan DATE NOT NULL,
    metode_pembayaran VARCHAR(30),
    status_penjualan VARCHAR(20),

    FOREIGN KEY (id_pelanggan) REFERENCES pelanggan(id_pelanggan),
    FOREIGN KEY (id_sales) REFERENCES sales(id_sales)
);

CREATE TABLE detail_penjualan (
    id_detail INT AUTO_INCREMENT PRIMARY KEY,
    id_penjualan INT NOT NULL,
    id_produk INT NOT NULL,
    jumlah INT NOT NULL,

    FOREIGN KEY (id_penjualan) REFERENCES penjualan(id_penjualan),
    FOREIGN KEY (id_produk) REFERENCES produk(id_produk)
);

INSERT INTO pelanggan VALUES
(1,'Andi','L','Jakarta','DKI Jakarta','2024-01-10'),
(2,'Budi','L','Bandung','Jawa Barat','2024-01-15'),
(3,'Citra','P','Surabaya','Jawa Timur','2024-01-20'),
(4,'Dina','P','Semarang','Jawa Tengah','2024-02-01'),
(5,'Eka','L','Yogyakarta','DI Yogyakarta','2024-02-10'),
(6,'Fajar','L','Bogor','Jawa Barat','2024-02-18'),
(7,'Gita','P','Bekasi','Jawa Barat','2024-03-01'),
(8,'Hana','P','Malang','Jawa Timur','2024-03-10'),
(9,'Indra','L','Medan','Sumatera Utara','2024-03-18'),
(10,'Joko','L','Denpasar','Bali','2024-04-01'),
(11,'Kiki','P','Makassar','Sulawesi Selatan','2024-04-08'),
(12,'Lina','P','Palembang','Sumatera Selatan','2024-04-15'),
(13,'Maman','L','Pontianak','Kalimantan Barat','2024-04-20'),
(14,'Nina','P','Balikpapan','Kalimantan Timur','2024-04-25'),
(15,'Oscar','L','Padang','Sumatera Barat','2024-05-02');

INSERT INTO sales VALUES
(1,'Rina','Jawa Barat','081111111111',70000000),
(2,'Dedi','DKI Jakarta','082222222222',80000000),
(3,'Santi','Jawa Tengah','083333333333',75000000),
(4,'Bambang','Jawa Timur','084444444444',85000000),
(5,'Rudi','Sumatera','085555555555',65000000),
(6,'Yuni','Bali','086666666666',60000000);

INSERT INTO produk VALUES
(1,'Laptop ASUS','Elektronik',8500000,20),
(2,'Mouse Logitech','Aksesoris',250000,100),
(3,'Sepatu Running','Olahraga',900000,40),
(4,'Kaos Olahraga','Fashion',175000,80),
(5,'Printer Epson','Elektronik',2800000,25),
(6,'Kertas A4','ATK',65000,200),
(7,'Kulkas Sharp','Elektronik',3500000,18),
(8,'Blender Philips','Elektronik',650000,35),
(9,'Tas Ransel','Fashion',450000,60),
(10,'Dompet Kulit','Fashion',225000,75),
(11,'Smartphone Samsung','Elektronik',4200000,30),
(12,'Power Bank','Elektronik',350000,80),
(13,'Laptop Lenovo','Elektronik',9200000,15),
(14,'TV LED 43 Inch','Elektronik',4200000,20),
(15,'Rice Cooker','Elektronik',700000,50),
(16,'Mesin Cuci','Elektronik',3200000,18),
(17,'Helm Full Face','Otomotif',850000,45),
(18,'Monitor LG','Elektronik',2200000,25),
(19,'Kamera Canon','Elektronik',6500000,12),
(20,'AC Panasonic','Elektronik',4800000,15);

INSERT INTO penjualan VALUES
(1001,1,2,'2025-01-02','Transfer','Selesai'),
(1002,2,1,'2025-01-03','QRIS','Selesai'),
(1003,3,4,'2025-01-05','COD','Selesai'),
(1004,4,3,'2025-01-07','Transfer','Selesai'),
(1005,5,3,'2025-01-10','Transfer','Diproses'),
(1006,6,4,'2025-01-12','QRIS','Selesai'),
(1007,7,1,'2025-01-15','COD','Dibatalkan'),
(1008,8,2,'2025-01-18','Transfer','Selesai'),
(1009,9,5,'2025-01-20','Transfer','Selesai'),
(1010,10,5,'2025-01-25','QRIS','Selesai'),
(1011,11,2,'2025-02-02','Transfer','Selesai'),
(1012,12,4,'2025-02-05','COD','Diproses'),
(1013,13,5,'2025-02-08','Transfer','Selesai');

INSERT INTO detail_penjualan VALUES
(1,1001,1,1),
(2,1001,2,2),

(3,1002,3,1),
(4,1002,4,2),

(5,1003,5,1),
(6,1003,6,5),

(7,1004,7,1),
(8,1004,8,1),

(9,1005,9,1),
(10,1005,10,2),

(11,1006,11,1),
(12,1006,12,1),

(13,1007,3,1),
(14,1007,10,1),

(15,1008,13,1),
(16,1008,2,1),

(17,1009,14,1),
(18,1009,2,2),

(19,1010,15,1),
(20,1010,8,1),

(21,1011,16,1),
(22,1011,2,1),

(23,1012,17,1),
(24,1012,12,2),

(25,1013,18,2),
(26,1013,19,1);