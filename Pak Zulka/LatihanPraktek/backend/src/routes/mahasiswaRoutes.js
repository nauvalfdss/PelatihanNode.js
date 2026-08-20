const express = require('express');
const router = express.Router();
const mahasiswaController = require('../controllers/mahasiswaController');
const { validationBodyMahasiswa } = require('../middleware/validation');

router.get('/', mahasiswaController.getAllMahasiswa);
router.get('/:id', mahasiswaController.getMahasiswaById);
router.post('/', validationBodyMahasiswa, mahasiswaController.createMahasiswa);
router.put('/:id', validationBodyMahasiswa, mahasiswaController.updateMahasiswa);
router.delete('/:id', mahasiswaController.deleteMahasiswa);

module.exports = router;
