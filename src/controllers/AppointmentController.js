// src/controllers/AppointmentController.js
const Appointment = require('../models/Appointment');

const create = async (req, res) => {
    try {
        const { patientName, service, startTime, endTime } = req.body;
        
        
        const newAppointment = await Appointment.create({
            patientName,
            service,
            startTime,
            endTime
        });

        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar agendamento', details: error.message });
    }
};

module.exports = {
    create
};