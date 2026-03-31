const Appointment = require('../models/Appointment');
const { Transform } = require('stream');

const downloadReport = async (req, res) => {
    try {
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=relatorio_agendamentos.csv');

        // Escreve o cabeçalho do CSV
        res.write('Paciente,Servico,Data_Inicio\n');

        // Cursor do MongoDB (Não carrega tudo na RAM)
        const cursor = Appointment.find().cursor();

        // Transformador: Objeto JS -> Linha de CSV
        const transformer = new Transform({
            objectMode: true,
            transform(chunk, encoding, callback) {
                const line = `${chunk.patientName},${chunk.service},${chunk.startTime}\n`;
                callback(null, line);
            }
        });

        // Pipeline: Banco -> Filtro/Transformação -> Resposta HTTP
        cursor.pipe(transformer).pipe(res);

    } catch (error) {
        res.status(500).json({ error: 'Erro ao gerar stream de dados' });
    }
};

module.exports = { downloadReport };