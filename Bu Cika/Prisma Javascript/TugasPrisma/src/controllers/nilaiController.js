const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// GET semua nilai
const getAllNilai = async (req, res) => {
    try {
        const nilai = await prisma.nilai.findMany({
            include: {
                mahasiswa: true,
                matakuliah: true
            }
        });

        res.status(200).json(nilai);
    } catch (error) {
        res.status(500).json({
            message: "Gagal mengambil data nilai",
            error: error.message
        });
    }
};


// GET nilai berdasarkan ID
const getNilaiById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const nilai = await prisma.nilai.findUnique({
            where: {
                id: id
            },
            include: {
                mahasiswa: true,
                matakuliah: true
            }
        });

        if (!nilai) {
            return res.status(404).json({
                message: "Data nilai tidak ditemukan"
            });
        }

        res.status(200).json(nilai);
    } catch (error) {
        res.status(500).json({
            message: "Gagal mengambil data nilai",
            error: error.message
        });
    }
};


// POST nilai
const createNilai = async (req, res) => {
    try {
        const {
            matakuliah_id,
            mahasiswa_id,
            nilai
        } = req.body;

        // Validasi body
        if (
            matakuliah_id === undefined ||
            mahasiswa_id === undefined ||
            nilai === undefined
        ) {
            return res.status(400).json({
                message: "matakuliah_id, mahasiswa_id, dan nilai wajib diisi"
            });
        }

        // Pastikan nilai berupa angka
        if (typeof nilai !== "number") {
            return res.status(400).json({
                message: "nilai harus berupa angka"
            });
        }

        // Nilai hanya boleh 0 - 100
        if (nilai < 0 || nilai > 100) {
            return res.status(400).json({
                message: "Nilai hanya boleh dari 0 sampai 100"
            });
        }

        // Tentukan indeks
        let indeks;

        if (nilai >= 80) {
            indeks = "A";
        } else if (nilai >= 70) {
            indeks = "B";
        } else if (nilai >= 60) {
            indeks = "C";
        } else if (nilai >= 50) {
            indeks = "D";
        } else {
            indeks = "E";
        }

        // Cek mahasiswa
        const mahasiswa = await prisma.mahasiswa.findUnique({
            where: {
                id: parseInt(mahasiswa_id)
            }
        });

        if (!mahasiswa) {
            return res.status(404).json({
                message: "Mahasiswa tidak ditemukan"
            });
        }

        // Cek mata kuliah
        const matakuliah = await prisma.matakuliah.findUnique({
            where: {
                id: parseInt(matakuliah_id)
            }
        });

        if (!matakuliah) {
            return res.status(404).json({
                message: "Mata kuliah tidak ditemukan"
            });
        }

        // Simpan ke database
        const dataNilai = await prisma.nilai.create({
            data: {
                skor: nilai,
                indeks: indeks,
                mahasiswaId: parseInt(mahasiswa_id),
                matakuliahId: parseInt(matakuliah_id)
            },
            include: {
                mahasiswa: true,
                matakuliah: true
            }
        });

        res.status(201).json({
            message: "Data nilai berhasil ditambahkan",
            data: dataNilai
        });

    } catch (error) {
        res.status(500).json({
            message: "Gagal menambahkan data nilai",
            error: error.message
        });
    }
};


// UPDATE nilai
const updateNilai = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const {
            matakuliah_id,
            mahasiswa_id,
            nilai
        } = req.body;

        // Cek data nilai
        const nilaiLama = await prisma.nilai.findUnique({
            where: {
                id: id
            }
        });

        if (!nilaiLama) {
            return res.status(404).json({
                message: "Data nilai tidak ditemukan"
            });
        }

        // Validasi nilai
        if (nilai !== undefined) {
            if (typeof nilai !== "number") {
                return res.status(400).json({
                    message: "nilai harus berupa angka"
                });
            }

            if (nilai < 0 || nilai > 100) {
                return res.status(400).json({
                    message: "Nilai hanya boleh dari 0 sampai 100"
                });
            }
        }

        // Gunakan nilai lama jika tidak dikirim
        const skorBaru = nilai !== undefined
            ? nilai
            : nilaiLama.skor;

        // Tentukan indeks baru
        let indeksBaru;

        if (skorBaru >= 80) {
            indeksBaru = "A";
        } else if (skorBaru >= 70) {
            indeksBaru = "B";
        } else if (skorBaru >= 60) {
            indeksBaru = "C";
        } else if (skorBaru >= 50) {
            indeksBaru = "D";
        } else {
            indeksBaru = "E";
        }

        const dataUpdate = {};

        if (nilai !== undefined) {
            dataUpdate.skor = skorBaru;
            dataUpdate.indeks = indeksBaru;
        }

        if (mahasiswa_id !== undefined) {
            const mahasiswa = await prisma.mahasiswa.findUnique({
                where: {
                    id: parseInt(mahasiswa_id)
                }
            });

            if (!mahasiswa) {
                return res.status(404).json({
                    message: "Mahasiswa tidak ditemukan"
                });
            }

            dataUpdate.mahasiswaId = parseInt(mahasiswa_id);
        }

        if (matakuliah_id !== undefined) {
            const matakuliah = await prisma.matakuliah.findUnique({
                where: {
                    id: parseInt(matakuliah_id)
                }
            });

            if (!matakuliah) {
                return res.status(404).json({
                    message: "Mata kuliah tidak ditemukan"
                });
            }

            dataUpdate.matakuliahId = parseInt(matakuliah_id);
        }

        const dataNilai = await prisma.nilai.update({
            where: {
                id: id
            },
            data: dataUpdate,
            include: {
                mahasiswa: true,
                matakuliah: true
            }
        });

        res.status(200).json({
            message: "Data nilai berhasil diubah",
            data: dataNilai
        });

    } catch (error) {
        res.status(500).json({
            message: "Gagal mengubah data nilai",
            error: error.message
        });
    }
};


// DELETE nilai
const deleteNilai = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const nilai = await prisma.nilai.findUnique({
            where: {
                id: id
            }
        });

        if (!nilai) {
            return res.status(404).json({
                message: "Data nilai tidak ditemukan"
            });
        }

        await prisma.nilai.delete({
            where: {
                id: id
            }
        });

        res.status(200).json({
            message: "Data nilai berhasil dihapus"
        });

    } catch (error) {
        res.status(500).json({
            message: "Gagal menghapus data nilai",
            error: error.message
        });
    }
};


module.exports = {
    getAllNilai,
    getNilaiById,
    createNilai,
    updateNilai,
    deleteNilai
};
