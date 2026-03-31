// src/controllers/AppointmentController.js
const Appointment = require('../models/Appointment');
const util = require('util');

const insertAsync = util.promisify(Appointment.insert).bind(Appointment);
const findAsync = util.promisify(Appointment.find).bind(Appointment);

const create = async (req, res) => {
    try {
        const { patientName, service, startTime, endTime } = req.body;

        // Agora o await funciona corretamente!
        const newDoc = await insertAsync({
            patientName,
            service,
            startTime: new Date(startTime),
            endTime: new Date(endTime),
            createdAt: new Date()
        });

        res.status(201).json(newDoc);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar agendamento', details: error.message });
    }
};

const view = async (req, res) => {
    try {
       
        const allAppointments = await findAsync({});
        res.status(200).json(allAppointments);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao buscar agendamentos', details: error.message });
    }
};

module.exports = {
    create, 
    view
};