const express = require('express');
const router = express.Router();
const ReportController = require('../controllers/ReportController');
const AppointmentController = require('../controllers/AppointmentController');

router.get('/report', ReportController.downloadReport);



router.post('/', AppointmentController.create);

module.exports = router;