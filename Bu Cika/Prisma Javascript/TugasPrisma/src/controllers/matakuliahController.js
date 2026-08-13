// src/controllers/matakuliahController.js
const prisma = require('../config/utils');

//READ
const getAllMatakuliah = async (req, res) => {
  try {
    const matakuliah = await prisma.matakuliah.findMany({
      include: { nilai: true } // sertakan nilai yang berhubungan
    });
    return res.json(matakuliah);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

const getMatakuliahById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const matakuliah = await prisma.matakuliah.findUnique({
      where: { id },
      include: { nilai: true }
    });

    if (!matakuliah) return res.status(404).json({ message: 'Matakuliah not found' });
    return res.json(matakuliah);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

//CREATE
const createMatakuliah = async (req, res) => {
  try {
    const { nama } = req.body;
    const matakuliah = await prisma.matakuliah.create({
      data: { nama }
    });
    return res.status(201).json(matakuliah);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
}

//UPDATE
const updateMatakuliah = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { nama } = req.body;

    const matakuliah = await prisma.matakuliah.update({
      where: { id },
      data: { nama }
    });
    return res.json(matakuliah);
  } catch (error) {
    console.error(error);
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Matakuliah not found' });
    }
    return res.status(400).json({ message: error.message });
  }
}

//DELETE
const deleteMatakuliah = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    // Karena relation di prisma onDelete: SetNull, saat delete matakuliah, nilai.matakuliah akan jadi null
    await prisma.matakuliah.delete({ where: { id } });
    return res.json({ message: 'Matakuliah deleted' });
  } catch (error) {
    console.error(error);
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Matakuliah not found' });
    }
    return res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  getAllMatakuliah,
  getMatakuliahById,
  createMatakuliah,
  updateMatakuliah,
  deleteMatakuliah
};
