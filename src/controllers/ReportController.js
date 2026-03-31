const Appointment = require('../models/Appointment.js');
const { Transform } = require('stream');

const downloadReport = async (req, res) => {
    try {
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=relatorio_agendamentos.csv');

        res.write('Paciente,Servico,Data_Inicio\n');

        
        const cursor = Appointment.find().cursor();

        const transformer = new Transform({
            objectMode: true,
            transform(chunk, encoding, callback) {
                const line = `${chunk.patientName},${chunk.service},${chunk.startTime}\n`;
                callback(null, line);
            }
        });

     
        cursor.pipe(transformer).pipe(res);

    } catch (error) {
        res.status(500).json({ error: 'Erro ao gerar stream de dados' });
    }
};

module.exports = { downloadReport };