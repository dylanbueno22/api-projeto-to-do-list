# 🚀 Deploy no Vercel

## 📋 Pré-requisitos

1. **Conta no Vercel**: [vercel.com](https://vercel.com)
2. **Vercel CLI**: `npm i -g vercel`
3. **GitHub**: Repositório com o código

## 🔧 Deploy do Backend

### 1. Instalar Vercel CLI
```bash
npm i -g vercel
```

### 2. Fazer login no Vercel
```bash
vercel login
```

### 3. Deploy do backend
```bash
cd todo-backend
vercel
```

### 4. Configurar variáveis de ambiente (opcional)
No dashboard do Vercel:
- `NODE_ENV=production`
- `VERCEL=true`

## 🌐 Deploy do Frontend

### 1. Atualizar URL da API
No arquivo do frontend, mudar:
```javascript
// De:
const API_URL = 'http://localhost:3000';

// Para:
const API_URL = 'https://seu-backend.vercel.app';
```

### 2. Deploy do frontend
```bash
cd to-do-list
vercel
```

## 📝 URLs dos Deploys

Após o deploy, você terá:
- **Backend**: `https://seu-backend.vercel.app`
- **Frontend**: `https://seu-frontend.vercel.app`

## 🔄 Atualizações

Para atualizar:
```bash
vercel --prod
```

## 📊 Monitoramento

- **Logs**: Dashboard do Vercel
- **Performance**: Analytics automático
- **Uptime**: 99.9% garantido

## ⚠️ Limitações do Vercel

- **Banco SQLite**: Dados são perdidos a cada deploy
- **Tempo limite**: 10 segundos por requisição
- **Armazenamento**: Sistema de arquivos temporário

## 💡 Recomendações

Para produção com dados persistentes:
1. **Usar PostgreSQL** (Supabase, Railway, etc.)
2. **Configurar migrações**
3. **Backup automático**
