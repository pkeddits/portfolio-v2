'use strict';

const claudeService = require('../services/claudeService');

async function handleChat(req, res) {
  const { history } = req.body;

  if (!Array.isArray(history) || history.length === 0) {
    return res.status(400).json({
      error: 'O campo "history" é obrigatório e deve ser um array não vazio.',
    });
  }

  const isValidHistory = history.every(
    (msg) =>
      typeof msg === 'object' &&
      (msg.role === 'user' || msg.role === 'assistant') &&
      typeof msg.content === 'string' &&
      msg.content.trim().length > 0
  );

  if (!isValidHistory) {
    return res.status(400).json({
      error: 'Cada mensagem deve ter "role" (user|assistant) e "content" (string não vazia).',
    });
  }

  const trimmedHistory = history.slice(-50);

  try {
    const reply = await claudeService.getChatResponse(trimmedHistory);
    return res.json({ reply });
  } catch (err) {
    console.error('[ChatController] Erro ao chamar API:', err.message);
    return res.status(502).json({
      error: 'Não foi possível obter resposta da IA no momento. Tente novamente em instantes.',
    });
  }
}

module.exports = { handleChat };