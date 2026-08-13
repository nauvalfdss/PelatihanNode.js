// src/controllers/mahasiswaController.js
const prisma = require('../config/utils');

//READ
const getAllMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await prisma.mahasiswa.findMany({
      include: { nilai: true } // sertakan nilai yang berhubungan
    });
    return res.json(mahasiswa);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

const getMahasiswaById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const mahasiswa = await prisma.mahasiswa.findUnique({
      where: { id },
      include: { nilai: true }
    });

    if (!mahasiswa) return res.status(404).json({ message: 'Mahasiswa not found' });
    return res.json(mahasiswa);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

//CREATE
const createMahasiswa = async (req, res) => {
  try {
    const { nama } = req.body;
    const mahasiswa = await prisma.mahasiswa.create({
      data: { nama }
    });
    return res.status(201).json(mahasiswa);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
}

//UPDATE
const updateMahasiswa = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { nama } = req.body;

    const mahasiswa = await prisma.mahasiswa.update({
      where: { id },
      data: { nama }
    });
    return res.json(mahasiswa);
  } catch (error) {
    console.error(error);
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Mahasiswa not found' });
    }
    return res.status(400).json({ message: error.message });
  }
}

//DELETE
const deleteMahasiswa = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    // Karena relation di prisma onDelete: SetNull, saat delete mahasiswa, nilai.mahasiswa akan jadi null
    await prisma.mahasiswa.delete({ where: { id } });
    return res.json({ message: 'Mahasiswa deleted' });
  } catch (error) {
    console.error(error);
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Mahasiswa not found' });
    }
    return res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  getAllMahasiswa,
  getMahasiswaById,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa
};
