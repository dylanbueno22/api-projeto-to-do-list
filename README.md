# 📋 Todo API Backend

API REST completa para gerenciamento de tarefas e grupos, construída com NestJS e TypeORM, conectada ao Supabase (PostgreSQL).

## 🚀 Tecnologias

- **NestJS** - Framework Node.js para APIs
- **TypeORM** - ORM para banco de dados
- **PostgreSQL** - Banco de dados via Supabase
- **TypeScript** - Linguagem de programação
- **Vercel** - Plataforma de deploy

## 📁 Estrutura do Projeto

```
src/
├── config/
│   └── supabase.config.ts    # Configuração do Supabase
├── groups/
│   ├── group.entity.ts       # Entidade Group
│   ├── groups.controller.ts  # Controller de grupos
│   ├── groups.service.ts     # Service de grupos
│   └── groups.module.ts      # Módulo de grupos
├── tasks/
│   ├── tasks.entity.ts       # Entidade Task
│   ├── tasks.controller.ts   # Controller de tarefas
│   ├── tasks.service.ts      # Service de tarefas
│   └── tasks.module.ts       # Módulo de tarefas
├── app.module.ts             # Módulo principal
├── app.controller.ts         # Controller principal
└── main.ts                   # Arquivo de inicialização
```

## 🔧 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run start:dev

# Build para produção
npm run build

# Executar em produção
npm run start:prod
```

## 🌐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```bash
# Supabase Configuration
SUPABASE_HOST=db.zyjdzpdtuyyerflizikq.supabase.co
SUPABASE_PORT=5432
SUPABASE_USER=postgres
SUPABASE_PASSWORD=sua_senha_aqui
SUPABASE_DATABASE=postgres

# Environment
NODE_ENV=development
```

## 📡 Endpoints da API

### Tarefas (`/tasks`)

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/tasks` | Listar todas as tarefas |
| GET | `/tasks/:id` | Buscar tarefa por ID |
| POST | `/tasks` | Criar nova tarefa |
| PUT | `/tasks/:id` | Atualizar tarefa |
| DELETE | `/tasks/:id` | Deletar tarefa |
| PATCH | `/tasks/:id/status` | Atualizar status da tarefa |

### Grupos (`/groups`)

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/groups` | Listar todos os grupos |
| GET | `/groups/:id` | Buscar grupo por ID |
| POST | `/groups` | Criar novo grupo |
| PUT | `/groups/:id` | Atualizar grupo |
| DELETE | `/groups/:id` | Deletar grupo |

## 📊 Modelos de Dados

### Task
```typescript
{
  id: number;
  title: string;
  status: 'pending' | 'in-progress' | 'completed';
  createdAt: Date;
}
```

### Group
```typescript
{
  id: number;
  name: string;
  color: string;
  createdAt: Date;
}
```

## 🌐 Exemplos de Uso

### Criar tarefa
```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Minha tarefa", "status": "pending"}'
```

### Criar grupo
```bash
curl -X POST http://localhost:3000/groups \
  -H "Content-Type: application/json" \
  -d '{"name": "Trabalho", "color": "#3B82F6"}'
```

### Atualizar status da tarefa
```bash
curl -X PATCH http://localhost:3000/tasks/1/status \
  -H "Content-Type: application/json" \
  -d '{"status": "completed"}'
```

## 🚀 Deploy no Vercel

### ⚠️ **IMPORTANTE: Configurar Variáveis de Ambiente PRIMEIRO!**

Antes de fazer o deploy, você **DEVE** configurar as variáveis de ambiente no dashboard da Vercel:

#### **1. Vá para:** https://vercel.com/dylanbueno22s-projects/todo-backend
#### **2. Settings → Environment Variables**
#### **3. Adicione EXATAMENTE estas variáveis:**

| **Name** | **Value** | **Environment** |
|----------|-----------|-----------------|
| `SUPABASE_HOST` | `db.zyjdzpdtuyyerflizikq.supabase.co` | Production ✅ |
| `SUPABASE_PORT` | `5432` | Production ✅ |
| `SUPABASE_USER` | `postgres` | Production ✅ |
| `SUPABASE_PASSWORD` | `dylan@30331007` | Production ✅ |
| `SUPABASE_DATABASE` | `postgres` | Production ✅ |

**⚠️ SEM essas variáveis, a API NÃO funcionará!**

### **4. Fazer Deploy**

```bash
# Instalar Vercel CLI (se não tiver)
npm i -g vercel

# Login na Vercel
vercel login

# Deploy para produção
vercel --prod
```

### **5. Verificar Deploy**

Após o deploy, verifique:
- ✅ **Build:** Deve ser bem-sucedido
- ✅ **Functions:** Deve mostrar logs sem erro
- ✅ **Variáveis:** Devem estar configuradas como Production

### **6. Testar API**

```bash
# Testar endpoint raiz
curl https://seu-projeto.vercel.app/

# Testar endpoint de tarefas
curl https://seu-projeto.vercel.app/tasks

# Testar endpoint de grupos
curl https://seu-projeto.vercel.app/groups
```

### **🚨 Problemas Comuns:**

1. **Erro 500:** Variáveis de ambiente não configuradas
2. **Erro 404:** Deploy falhou ou não foi aplicado
3. **CORS:** Configurado automaticamente no código

### **🔗 URL da API**

Após deploy bem-sucedido, sua API estará em:
```
https://seu-projeto.vercel.app
```

## 📝 Licença

Este projeto está sob a licença MIT.
