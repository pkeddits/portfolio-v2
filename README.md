<div align="center">

<img src="frontend/assets/cartoons/18.png" width="120" alt="Felipe Lima" style="border-radius:50%"/>

# Felipe Lima · Portfolio v2

**Cloud · Cybersecurity · Infrastructure · Dev Web**

[![Site](https://img.shields.io/badge/🌐_limaxx.space-live-F5A623?style=for-the-badge)](https://limaxx.space)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-limaxx-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/limaxx)
[![GitHub](https://img.shields.io/badge/GitHub-pkeddits-181717?style=for-the-badge&logo=github)](https://github.com/pkeddits)

</div>

---

## ✨ Sobre o projeto

Portfólio pessoal full-stack desenvolvido do zero — apresentando minha transição de carreira para **Cloud Computing, Cybersecurity e Infraestrutura de TI**, com background em desenvolvimento web como diferencial técnico.

O diferencial desta versão é o **chatbot com IA integrada** que responde perguntas sobre minha carreira em tempo real, com arquitetura separada entre frontend e backend, cada um com seu próprio deploy em produção.

---

## 🚀 Funcionalidades

| Feature | Descrição |
|---|---|
| 🤖 **AI Chatbot** | Assistente virtual com Groq API + LLaMA 3, responde em PT e EN |
| ✍️ **Typed Effect** | Efeito de digitação animado na seção hero |
| 🎞️ **Scroll Reveal** | Animações suaves ao rolar a página |
| 🌓 **Dark / Light** | Alternância de tema com preferência salva |
| 🌍 **PT / EN** | Tradução completa do site com um clique |
| 📱 **Responsivo** | Layout otimizado para mobile e desktop |
| 🎨 **Mascote** | Personagem cartoon em todas as seções |

---

## 🏗️ Arquitetura

```
portfolio-v2/
├── frontend/
│   ├── index.html          # HTML + CSS completo (single file)
│   ├── ui.js               # Animações, scroll reveal, typed effect, menu mobile
│   ├── chatbot.js          # Lógica do chat e comunicação com o backend
│   ├── favicon.svg         # Ícone personalizado com cartoon
│   └── assets/
│       ├── cartoons/       # PNGs do mascote (por seção)
│       └── covers/         # Capas SVG dos projetos
│
└── backend/
    ├── server.js                    # Express + middlewares + trust proxy
    ├── config/
    │   └── env.js                   # Validação de variáveis de ambiente
    ├── controllers/
    │   └── chatController.js        # Handler POST /api/chat
    ├── middleware/
    │   └── errorHandler.js          # Tratamento global de erros
    ├── routes/
    │   └── api.js                   # Rotas + rate limiting
    └── services/
        └── claudeService.js         # Integração Groq API (LLaMA 3.3 70B)
                                     # Nota: nome mantido do dev inicial com Anthropic
```

---

## 🛠️ Stack

**Frontend**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

**Backend**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![Groq](https://img.shields.io/badge/Groq_API-F55036?style=flat&logo=groq&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=flat&logo=railway&logoColor=white)

---

## ⚙️ Como rodar localmente

### Pré-requisitos

- Node.js 18+
- Conta no [Groq Console](https://console.groq.com) (gratuito) para obter a API key
- Extensão Live Server no VS Code

### 1. Clone o repositório

```bash
git clone https://github.com/pkeddits/portfolio-v2.git
cd portfolio-v2
```

### 2. Configure o backend

```bash
cd backend
npm install
cp .env.example .env
```

Edite o `.env`:

```env
GROQ_API_KEY=sua_chave_aqui
CORS_ORIGIN=http://127.0.0.1:5500
NODE_ENV=development
PORT=3001
```

```bash
npm run dev
```

### 3. Rode o frontend

Abra `frontend/index.html` com o **Live Server** do VS Code.
O site estará em `http://127.0.0.1:5500`.

---

## 🌐 Deploy em produção

| Parte | Plataforma | URL |
|---|---|---|
| Frontend | Vercel | [limaxx.space](https://limaxx.space) |
| Backend | Railway | portfolio-v2-production-895e.up.railway.app |

### Variáveis de ambiente (Railway)

```env
GROQ_API_KEY=sua_chave_aqui
CORS_ORIGIN=https://limaxx.space
NODE_ENV=production
PORT=3001
```

---

## 📡 API

### `POST /api/chat`

Recebe o histórico da conversa e retorna a resposta do assistente.

**Request:**
```json
{
  "history": [
    { "role": "user", "content": "What are your skills?" }
  ]
}
```

**Response:**
```json
{
  "reply": "Felipe is focused on Cloud, Cybersecurity and Infrastructure..."
}
```

### `GET /api/health`

```json
{ "status": "ok", "timestamp": "2026-04-26T..." }
```

---

## 📬 Contato

<div align="center">

[![Email](https://img.shields.io/badge/Email-felipeplima2007@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:felipeplima2007@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-/in/limaxx-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/limaxx)
[![Site](https://img.shields.io/badge/Site-limaxx.space-F5A623?style=for-the-badge&logo=vercel&logoColor=white)](https://limaxx.space)

</div>

---

<div align="center">

Desenvolvido com ♥ por **Felipe Lima** · 2026

*HTML · CSS · JavaScript · Node.js · Groq API*

</div>
