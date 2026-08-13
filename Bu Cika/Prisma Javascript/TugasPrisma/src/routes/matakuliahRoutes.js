const express = require('express');
const router = express.Router();
const matakuliahController = require('../controllers/matakuliahController');
const { validationBodyMatakuliah } = require('../middleware/validation');

router.get('/', matakuliahController.getAllMatakuliah);
router.get('/:id', matakuliahController.getMatakuliahById);
router.post('/', validationBodyMatakuliah, matakuliahController.createMatakuliah);
router.put('/id', validationBodyMatakuliah, matakuliahController.updateMatakuliah);
router.delete('/:id', matakuliahController.deleteMatakuliah);

module.exports = router;
