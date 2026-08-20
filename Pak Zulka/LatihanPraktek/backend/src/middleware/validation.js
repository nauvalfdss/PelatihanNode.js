const validationBodyMahasiswa = (req, res, next) => {
    let {nama} = req.body;

    if (nama === undefined) {
        res.status(400).json({message: "nama is required"});
    } else {
        next();
    }
}

module.exports = {
    validationBodyMahasiswa
}