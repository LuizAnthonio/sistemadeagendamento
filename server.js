require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const appointmentRoutes = require('./src/routes/appointmentRoutes');

const app = express();
app.use(express.json());

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado com sucesso'))
  .catch(err => console.error('Erro ao conectar:', err));

// Rotas
app.use('/api/appointments', appointmentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server rodando na porta ${PORT}`);
});