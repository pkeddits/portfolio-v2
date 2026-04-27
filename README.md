<div align="center">

<img src="frontend/assets/cartoons/18.png" width="120" alt="Felipe Lima"/>

# Felipe Lima · Portfolio v2

**Cloud · Cybersecurity · Infrastructure · Dev Web**

[![Site](https://img.shields.io/badge/🌐_limaxx.space-live-F5A623?style=for-the-badge)](https://limaxx.space)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-limaxx-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/limaxx)
[![GitHub](https://img.shields.io/badge/GitHub-pkeddits-181717?style=for-the-badge&logo=github)](https://github.com/pkeddits)

</div>

---

## ✨ Sobre o projeto

Portfólio pessoal full-stack desenvolvido do zero — apresentando minha transição de carreira para **Cloud Computing, Cybersecurity e Infraestrutura de TI**, com background em desenvolvimento web como diferencial técnico.

O diferencial desta versão é o **chatbot com IA integrada** que responde perguntas sobre minha carreira em tempo real, com backend serverless via Vercel Functions.

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
└── frontend/
    ├── index.html          # HTML + CSS completo
    ├── ui.js               # Animações, scroll reveal, typed effect, menu mobile
    ├── chatbot.js          # Lógica do chat
    ├── favicon.svg         # Ícone personalizado com cartoon
    ├── vercel.json         # Configuração das Vercel Functions
    ├── package.json        # Dependência do groq-sdk
    ├── assets/
    │   ├── cartoons/       # PNGs do mascote (por seção)
    │   └── covers/         # Capas SVG dos projetos
    └── api/
        └── chat.js         # Vercel Function — integração Groq API (LLaMA 3.3 70B)
```

---

## 🛠️ Stack

**Frontend**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

**Backend (Serverless)**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Groq](https://img.shields.io/badge/Groq_API-F55036?style=flat)
![Vercel](https://img.shields.io/badge/Vercel_Functions-000000?style=flat&logo=vercel&logoColor=white)

---

## ⚙️ Como rodar localmente

### Pré-requisitos

- Node.js 18+
- Conta no [Groq Console](https://console.groq.com) (gratuito)
- Vercel CLI

### 1. Clone o repositório

```bash
git clone https://github.com/pkeddits/portfolio-v2.git
cd portfolio-v2/frontend
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na pasta `frontend/`:

```env
GROQ_API_KEY=sua_chave_aqui
```

### 4. Rode com Vercel CLI

```bash
npx vercel dev
```

O site estará disponível em `http://localhost:3000`.

---

## 🌐 Deploy em produção

Tudo roda na **Vercel** — frontend e backend no mesmo projeto.

| Parte | Plataforma | URL |
|---|---|---|
| Frontend + API | Vercel | [limaxx.space](https://limaxx.space) |

### Variáveis de ambiente (Vercel)

Em **Settings → Environment Variables**:

```
GROQ_API_KEY=sua_chave_aqui
```

---

## 📡 API

### `POST /api/chat`

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

---

## 📬 Contato

<div align="center">

[![Email](https://img.shields.io/badge/Email-felipeplima2007@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:felipeplima2007@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-/in/limaxx-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/limaxx)
[![Site](https://img.shields.io/badge/Site-limaxx.space-F5A623?style=for-the-badge)](https://limaxx.space)

</div>

---

<div align="center">

Desenvolvido com ♥ por **Felipe Lima** · 2026

*HTML · CSS · JavaScript · Node.js · Groq API · Vercel*

</div>