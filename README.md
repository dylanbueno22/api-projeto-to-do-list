# 📋 Todo API Backend

API REST completa para gerenciamento de tarefas e grupos, construída com NestJS e TypeORM.

## 🚀 Tecnologias

- **NestJS** - Framework Node.js
- **TypeORM** - ORM para banco de dados
- **SQLite** - Banco de dados (desenvolvimento)
- **TypeScript** - Linguagem de programação

## 📁 Estrutura do Projeto

```
src/
├── config/
│   ├── database.config.ts    # Configuração do banco
│   └── vercel.config.ts      # Configuração para Vercel
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
  completed: boolean;
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

## 🚀 Deploy

Veja o arquivo [DEPLOY.md](./DEPLOY.md) para instruções completas de deploy no Vercel.

## 📝 Licença

Este projeto está sob a licença MIT.
