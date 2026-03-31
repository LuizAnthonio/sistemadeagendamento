const express = require('express');
const router = express.Router();
const ReportController = require('../controllers/ReportController');
const AppointmentController = require('../controllers/AppointmentController');

// Rota do Relatório com Stream (O diferencial dos 10k)
router.get('/report', ReportController.downloadReport);

// Rota de Criação com Validação de Conflito
router.post('/', AppointmentController.create);

module.exports = router;