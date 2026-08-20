/*
  Warnings:

  - Added the required column `email` to the `Mahasiswa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kelas` to the `Mahasiswa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `mahasiswa` ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `kelas` VARCHAR(191) NOT NULL;
