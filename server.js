require('dotenv').config();
const express = require('express');
const appointmentRoutes = require('./src/routes/appointmentRoutes');

const app = express();

// Middleware para ler JSON no corpo das requisições
app.use(express.json());

// Rotas
app.use('/api/appointments', appointmentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server rodando na porta ${PORT}`);
    console.log(`Banco de dados local (NeDB) ativo.`);
});