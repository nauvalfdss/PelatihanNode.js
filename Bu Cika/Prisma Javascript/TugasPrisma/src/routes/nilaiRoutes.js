const express = require('express');
const router = express.Router();
const nilaiController = require('../controllers/nilaiController');
const { validationBodyNilai } = require('../middleware/validation');

router.get('/', nilaiController.getAllNilai);
router.get('/:id', nilaiController.getNilaiById);
router.post('/', validationBodyNilai, nilaiController.createNilai);
router.put('/id', validationBodyNilai, nilaiController.updateNilai);
router.delete('/:id', nilaiController.deleteNilai);

module.exports = router;