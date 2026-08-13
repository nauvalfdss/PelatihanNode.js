const validationBodyMahasiswa = (req, res, next) => {
    let {nama} = req.body;

    if (nama === undefined) {
        res.status(400).json({message: "nama is required"});
    } else {
        next();
    }
}
const validationBodyMatakuliah = (req, res, next) => {
    let {nama} = req.body;

    if (nama === undefined) {
        res.status(400).json({message: "nama is required"});
    } else {
        next();
    }
}

const validationBodyNilai = (req, res, next) => {
    const { matakuliah_id, mahasiswa_id, nilai } = req.body;

    // Cek field wajib
    if (
        matakuliah_id === undefined ||
        mahasiswa_id === undefined ||
        nilai === undefined
    ) {
        return res.status(400).json({
            message: "matakuliah_id, mahasiswa_id, dan nilai wajib diisi"
        });
    }

    // Pastikan hanya 3 field yang boleh dikirim
    const allowedFields = [
        "matakuliah_id",
        "mahasiswa_id",
        "nilai"
    ];

    const bodyFields = Object.keys(req.body);

    const invalidFields = bodyFields.filter(
        field => !allowedFields.includes(field)
    );

    if (invalidFields.length > 0) {
        return res.status(400).json({
            message: `Field ${invalidFields.join(", ")} tidak diperbolehkan`
        });
    }

    // Validasi tipe ID
    if (!Number.isInteger(matakuliah_id)) {
        return res.status(400).json({
            message: "matakuliah_id harus berupa angka"
        });
    }

    if (!Number.isInteger(mahasiswa_id)) {
        return res.status(400).json({
            message: "mahasiswa_id harus berupa angka"
        });
    }

    // Validasi tipe nilai
    if (typeof nilai !== "number") {
        return res.status(400).json({
            message: "nilai harus berupa angka"
        });
    }

    // Validasi range nilai
    if (nilai < 0 || nilai > 100) {
        return res.status(400).json({
            message: "nilai hanya boleh dari 0 sampai 100"
        });
    }

    next();
};

module.exports = {
    validationBodyMahasiswa,
    validationBodyMatakuliah,
    validationBodyNilai
}