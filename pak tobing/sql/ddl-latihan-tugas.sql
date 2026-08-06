create database eCommerce;
use eCommerce;

CREATE TABLE pelanggan (
    id_pelanggan varchar(6) PRIMARY KEY,
    nama_pelanggan VARCHAR(100),
    jenis_kelamin VARCHAR(20),
    kota VARCHAR(100),
    provinsi VARCHAR(100),
    tanggal_daftar DATE
);
CREATE TABLE kategori (
    id_kategori varchar(4) PRIMARY KEY,
    nama_kategori VARCHAR(100)
);
CREATE TABLE produk (
    id_produk varchar(6) PRIMARY KEY,
    nama_produk VARCHAR(150),
    id_kategori varchar(4),
    harga INT,
    stok INT,
    FOREIGN KEY (id_kategori) REFERENCES kategori(id_kategori)
);
CREATE TABLE pesanan (
    id_pesanan varchar(9) PRIMARY KEY,
    id_pelanggan varchar(6),
    tanggal_pesanan DATE,
    status_pesanan VARCHAR(30),
    metode_pembayaran VARCHAR(50),
    FOREIGN KEY (id_pelanggan) REFERENCES pelanggan(id_pelanggan)
);
CREATE TABLE detail_pesanan (
    id_detail INT PRIMARY KEY,
    id_pesanan varchar(9),
    id_produk varchar(6),
    jumlah INT,
    harga_satuan INT,
    FOREIGN KEY (id_pesanan) REFERENCES pesanan(id_pesanan),
    FOREIGN KEY (id_produk) REFERENCES produk(id_produk)
);
CREATE TABLE kurir (
    id_kurir varchar(5) PRIMARY KEY,
    nama_kurir VARCHAR(100)
);
CREATE TABLE pengiriman (
    id_pengiriman INT PRIMARY KEY,
    id_pesanan varchar(9),
    id_kurir varchar(5),
    ongkir INT,
    tanggal_kirim DATE,
    tanggal_terima DATE,
    FOREIGN KEY (id_pesanan) REFERENCES pesanan(id_pesanan),
    FOREIGN KEY (id_kurir) REFERENCES kurir(id_kurir)
);
INSERT INTO kategori VALUES
('K-01','Elektronik'),
('K-02','Fashion'),
('K-03','Rumah Tangga'),
('K-04','Olahraga'),
('K-05','Makanan');

INSERT INTO kurir VALUES
('Kr-01','JNE'),
('Kr-02','J&T'),
('Kr-03','SiCepat'),
('Kr-04','AnterAja');

INSERT INTO pelanggan VALUES
('Pl-001','Andi','Laki-laki','Jakarta','DKI Jakarta','2023-01-10'),
('Pl-002','Budi','Laki-laki','Bandung','Jawa Barat','2023-02-14'),
('Pl-003','Citra','Perempuan','Surabaya','Jawa Timur','2023-03-20'),
('Pl-004','Dina','Perempuan','Medan','Sumatera Utara','2023-01-22'),
('Pl-005','Eka','Laki-laki','Semarang','Jawa Tengah','2023-05-11'),
('Pl-006','Fajar','Laki-laki','Bogor','Jawa Barat','2023-04-18'),
('Pl-007','Gita','Perempuan','Yogyakarta','DI Yogyakarta','2023-06-21'),
('Pl-008','Hana','Perempuan','Malang','Jawa Timur','2023-07-15'),
('Pl-009','Indra','Laki-laki','Makassar','Sulawesi Selatan','2023-03-08'),
('Pl-010','Joko','Laki-laki','Denpasar','Bali','2023-02-25');

INSERT INTO produk VALUES
('P-0001','Laptop ASUS','K-01',9000000,20),
('P-0002','Mouse Logitech','K-01',250000,100),
('P-0003','Keyboard Mechanical','K-01',700000,50),
('P-0004','Kaos Polos','K-02',120000,200),
('P-0005','Celana Jeans','K-02',350000,100),
('P-0006','Sepatu Running','K-04',800000,80),
('P-0007','Blender','K-03',450000,60),
('P-0008','Rice Cooker','K-03',600000,40),
('P-0009','Kopi Arabika','K-05',90000,150),
('P-0010','Snack Kentang','K-05',25000,300);

INSERT INTO pesanan VALUES
('Psn-00001','Pl-001','2026-01-03','Selesai','Transfer'),
('Psn-00002','Pl-002','2026-01-05','Selesai','E-Wallet'),
('Psn-00003','Pl-003','2026-01-06','Selesai','COD'),
('Psn-00004','Pl-004','2026-01-10','Diproses','Transfer'),
('Psn-00005','Pl-005','2026-01-12','Selesai','Transfer'),
('Psn-00006','Pl-006','2026-01-13','Dibatalkan','COD'),
('Psn-00007','Pl-007','2026-01-14','Selesai','Transfer'),
('Psn-00008','Pl-008','2026-01-16','Selesai','E-Wallet'),
('Psn-00009','Pl-009','2026-01-18','Selesai','Transfer'),
('Psn-00010','Pl-010','2026-01-20','Diproses','COD'),
('Psn-00011','Pl-001','2026-02-01','Selesai','Transfer'),
('Psn-00012','Pl-002','2026-02-05','Selesai','COD'),
('Psn-00013','Pl-003','2026-02-07','Selesai','Transfer'),
('Psn-00014','Pl-005','2026-02-10','Diproses','Transfer'),
('Psn-00015','Pl-007','2026-02-12','Selesai','E-Wallet');

INSERT INTO detail_pesanan VALUES
(1,'Psn-00001','P-0001',1,9000000),
(2,'Psn-00001','P-0002',2,250000),
(3,'Psn-00002','P-0004',3,120000),
(4,'Psn-00002','P-0005',1,350000),
(5,'Psn-00003','P-0006',1,800000),
(6,'Psn-00003','P-0009',5,90000),
(7,'Psn-00004','P-0003',2,700000),
(8,'Psn-00005','P-0007',1,450000),
(9,'Psn-00005','P-0010',10,25000),
(10,'Psn-00006','P-0002',5,250000),
(11,'Psn-00007','P-0008',1,600000),
(12,'Psn-00008','P-0001',1,9000000),
(13,'Psn-00009','P-0005',2,350000),
(14,'Psn-00009','P-0010',20,25000),
(15,'Psn-00010','P-0006',1,800000),
(16,'Psn-00011','P-0004',5,120000),
(17,'Psn-00011','P-0009',3,90000),
(18,'Psn-00012','P-0007',2,450000),
(19,'Psn-00013','P-0001',1,9000000),
(20,'Psn-00013','P-0003',1,700000),
(21,'Psn-00014','P-0002',10,250000),
(22,'Psn-00015','P-0006',2,800000),
(23,'Psn-00015','P-0010',15,25000);
update detail_pesanan
SET id_produk = 'P-0009'
where id_detail = 11;

INSERT INTO pengiriman VALUES
(1,'Psn-00001','Kr-01',25000,'2026-01-04','2026-01-06'),
(2,'Psn-00002','Kr-02',20000,'2026-01-06','2026-01-08'),
(3,'Psn-00003','Kr-03',30000,'2026-01-07','2026-01-10'),
(4,'Psn-00005','Kr-01',25000,'2026-01-13','2026-01-15'),
(5,'Psn-00007','Kr-04',18000,'2026-01-15','2026-01-17'),
(6,'Psn-00008','Kr-02',22000,'2026-01-17','2026-01-20'),
(7,'Psn-00009','Kr-03',26000,'2026-01-19','2026-01-22'),
(8,'Psn-00011','Kr-01',25000,'2026-02-02','2026-02-05'),
(9,'Psn-00012','Kr-02',20000,'2026-02-06','2026-02-08'),
(10,'Psn-00013','Kr-04',22000,'2026-02-08','2026-02-11'),
(11,'Psn-00015','Kr-03',30000,'2026-02-13','2026-02-15');
