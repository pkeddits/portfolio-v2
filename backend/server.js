'use strict';

const express = require('express');
const cors = require('cors');
const { PORT, CORS_ORIGIN, NODE_ENV } = require('./config/env');
const apiRouter = require('./routes/api');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();

// Trust proxy — necessário no Railway (evita erro do express-rate-limit)
app.set('trust proxy', 1);

// CORS
app.use(
  cors({
    origin: CORS_ORIGIN,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  })
);

// Parse JSON
app.use(express.json({ limit: '100kb' }));

// Log em desenvolvimento
if (NODE_ENV === 'development') {
  app.use((req, _res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
  });
}

// Rotas
app.use('/api', apiRouter);

app.get('/', (_req, res) => {
  res.json({ message: 'Portfolio API está online 🚀' });
});

// 404
app.use((_req, res) => {
  res.status(404).json({ error: 'Rota não encontrada.' });
});

// Erros globais
app.use(errorHandler);

// Start
app.listen(PORT, () => {
  console.log(`✅ Backend rodando em http://localhost:${PORT}`);
  console.log(`   Ambiente: ${NODE_ENV}`);
  console.log(`   CORS permitido para: ${CORS_ORIGIN}`);
});