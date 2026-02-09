# 🚀 Portal IMPA Tech - API Backend

API REST desenvolvida em Node.js + TypeScript para o Portal do Estudante IMPA Tech.

## 📋 Índice

- [Sobre](#sobre)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Uso](#uso)
- [Endpoints](#endpoints)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Testes](#testes)
- [Deploy](#deploy)
- [Contribuindo](#contribuindo)

---

## 📖 Sobre

Esta API fornece endpoints para gestão de usuários, disciplinas, trabalhos, matrículas e notas do Portal IMPA Tech.

**Versão**: 1.0.0  
**Autores**: Carlos E., Mateus A., Mateus B.  
**Licença**: MIT

---

## 🛠 Tecnologias

- **Runtime**: Node.js 20+
- **Linguagem**: TypeScript 5.9
- **Framework**: Express 4.22
- **Segurança**: Helmet, CORS
- **Ambiente**: dotenv
- **Dev**: ts-node-dev (hot reload)

---

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passo a Passo

```bash
# 1. Clonar o repositório
git clone https://github.com/seu-usuario/impatech-api.git
cd impatech-api

# 2. Instalar dependências
npm install

# 3. Configurar variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas configurações

# 4. Rodar em desenvolvimento
npm run dev

# 5. Build para produção
npm run build
npm start
```

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Servidor
PORT=3001
NODE_ENV=development

# Banco de Dados (futuro)
# DB_HOST=localhost
# DB_PORT=5432
# DB_USER=seu_usuario
# DB_PASSWORD=sua_senha
# DB_NAME=impatech_db

# JWT (futuro)
# JWT_SECRET=seu_segredo_super_secreto
# JWT_EXPIRES_IN=24h
```

---

## 🚀 Uso

### Desenvolvimento

```bash
npm run dev
```

Servidor inicia em: **http://localhost:3001**

### Produção

```bash
npm run build
npm start
```

### Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor com hot reload |
| `npm run build` | Compila TypeScript para JavaScript |
| `npm start` | Inicia servidor de produção |
| `npm test` | Roda testes (a implementar) |

---

## 📌 Endpoints

### 🏥 Health Check

```http
GET /health
```

**Resposta (200)**:
```json
{
  "status": "OK",
  "timestamp": "2025-01-28T10:00:00.000Z"
}
```

---

### 👤 Usuários

#### Listar Todos os Usuários

```http
GET /api/users
```

**Resposta (200)**:
```json
[
  {
    "id": 1,
    "name": "João Silva",
    "email": "joao@email.com",
    "age": 25,
    "createdAt": "2025-01-28T10:00:00.000Z",
    "updatedAt": "2025-01-28T10:00:00.000Z"
  },
  {
    "id": 2,
    "name": "Maria Santos",
    "email": "maria@email.com",
    "age": 30,
    "createdAt": "2025-01-28T10:00:00.000Z",
    "updatedAt": "2025-01-28T10:00:00.000Z"
  }
]
```

---

#### Buscar Usuário por ID

```http
GET /api/users/:id
```

**Parâmetros**:
- `id` (number) - ID do usuário

**Exemplo**:
```http
GET /api/users/1
```

**Resposta (200)**:
```json
{
  "id": 1,
  "name": "João Silva",
  "email": "joao@email.com",
  "age": 25,
  "createdAt": "2025-01-28T10:00:00.000Z",
  "updatedAt": "2025-01-28T10:00:00.000Z"
}
```

**Erros**:
- `400` - ID inválido
- `404` - Usuário não encontrado

---

#### Criar Novo Usuário

```http
POST /api/users
```

**Body (JSON)**:
```json
{
  "name": "Carlos Eduardo",
  "email": "carlos@email.com",
  "age": 22
}
```

**Campos**:
- `name` (string, obrigatório) - Nome completo
- `email` (string, obrigatório) - Email válido
- `age` (number, opcional) - Idade

**Resposta (201)**:
```json
{
  "message": "Usuário criado com sucesso",
  "user": {
    "id": 3,
    "name": "Carlos Eduardo",
    "email": "carlos@email.com",
    "age": 22,
    "createdAt": "2025-01-28T10:00:00.000Z",
    "updatedAt": "2025-01-28T10:00:00.000Z"
  }
}
```

**Erros**:
- `400` - Dados inválidos (nome/email faltando)
- `400` - Email com formato inválido
- `409` - Email já cadastrado

---

## 📁 Estrutura do Projeto

```
api-simples/
├── src/
│   ├── app.ts              # Configuração do Express
│   ├── server.ts           # Inicialização do servidor
│   ├── config/
│   │   └── db.ts          # Configuração do banco
│   ├── controllers/
│   │   └── controller.ts  # Lógica de negócio
│   ├── models/
│   │   └── user.ts        # Model de usuário
│   ├── routes/
│   │   └── userRoutes.ts  # Rotas de usuário
│   └── middlewares/
│       └── logger.ts      # Middleware de log
├── dist/                   # Código compilado (gerado)
├── node_modules/          # Dependências
├── .env                   # Variáveis de ambiente
├── .gitignore
├── package.json
├── tsconfig.json          # Configuração TypeScript
├── LICENSE
└── README.md
```

---

## 🧪 Testes

### Testando com cURL

```bash
# Health check
curl http://localhost:3001/health

# Listar usuários
curl http://localhost:3001/api/users

# Buscar usuário por ID
curl http://localhost:3001/api/users/1

# Criar usuário
curl -X POST http://localhost:3001/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Teste Silva",
    "email": "teste@email.com",
    "age": 20
  }'
```

### Testando com Bruno

Veja a seção [Bruno Testing Guide](#bruno-testing-guide) abaixo.

### Testes Automatizados

```bash
# TODO: Implementar testes
npm test
```

---

## 🌐 Deploy

### Heroku

```bash
# Login
heroku login

# Criar app
heroku create impatech-api

# Deploy
git push heroku main

# Configurar variáveis
heroku config:set NODE_ENV=production
heroku config:set PORT=3001
```

### Railway

```bash
# Instalar CLI
npm install -g @railway/cli

# Login
railway login

# Deploy
railway up
```

### Docker (Opcional)

```dockerfile
# Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]
```

```bash
# Build
docker build -t impatech-api .

# Run
docker run -p 3001:3001 --env-file .env impatech-api
```

---

## 👥 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

### Padrões de Código

- Use TypeScript
- Siga o padrão ESLint (quando configurado)
- Escreva testes para novas funcionalidades
- Documente novos endpoints

---

## 📝 Roadmap

- [x] Setup inicial do projeto
- [x] Endpoints básicos de usuários
- [ ] Autenticação JWT
- [ ] Banco de dados (PostgreSQL/MySQL)
- [ ] Endpoints de disciplinas
- [ ] Endpoints de trabalhos
- [ ] Sistema de matrículas
- [ ] Upload de arquivos
- [ ] Testes automatizados
- [ ] Documentação Swagger
- [ ] CI/CD

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 Contato

**Equipe Backend**:
- Carlos Eduardo - [GitHub](https://github.com/carlos)
- Mateus A. - [GitHub](https://github.com/mateus-a)
- Mateus B. - [GitHub](https://github.com/mateus-b)

**Repositório**: [https://github.com/impatech/portal-api](https://github.com/impatech/portal-api)

---

## 🙏 Agradecimentos

- IMPA Tech
- Equipe de Desenvolvimento
- Comunidade Open Source

---

# 📘 Bruno Testing Guide

## O que é Bruno?

Bruno é uma ferramenta open-source alternativa ao Postman/Insomnia para testar APIs. Ele armazena as coleções em arquivos locais (Git-friendly).

## Instalação

### Opção 1: Download Direto

1. Acesse: https://www.usebruno.com/downloads
2. Baixe para seu sistema (Windows/Mac/Linux)
3. Instale normalmente

### Opção 2: Package Manager

```bash
# Windows (winget)
winget install Bruno.Bruno

# Mac (homebrew)
brew install bruno

# Linux (snap)
snap install bruno
```

## Configurando a Coleção

### 1. Criar Nova Coleção

1. Abra o Bruno
2. Clique em **"Create Collection"**
3. Nome: `IMPA Tech API`
4. Localização: Escolha a pasta do projeto

### 2. Configurar Ambiente

1. Clique em **"Environments"**
2. Crie um ambiente chamado `Development`
3. Adicione variáveis:

```json
{
  "baseUrl": "http://localhost:3001",
  "apiPrefix": "/api"
}
```

## Criando Requisições

### 1. Health Check

1. Clique com direito na coleção → **"New Request"**
2. Nome: `Health Check`
3. Método: `GET`
4. URL: `{{baseUrl}}/health`
5. Salve (Ctrl+S)

**Teste**: Clique em **"Send"** ✅

---

### 2. Listar Usuários

1. Nova Requisição
2. Nome: `Get All Users`
3. Método: `GET`
4. URL: `{{baseUrl}}{{apiPrefix}}/users`
5. Salve

**Teste**: Clique em **"Send"** ✅

---

### 3. Buscar Usuário por ID

1. Nova Requisição
2. Nome: `Get User by ID`
3. Método: `GET`
4. URL: `{{baseUrl}}{{apiPrefix}}/users/1`
5. Salve

**Teste**: Clique em **"Send"** ✅

---

### 4. Criar Usuário

1. Nova Requisição
2. Nome: `Create User`
3. Método: `POST`
4. URL: `{{baseUrl}}{{apiPrefix}}/users`
5. Aba **"Body"** → Selecione **"JSON"**
6. Cole o JSON:

```json
{
  "name": "Novo Usuário",
  "email": "novo@email.com",
  "age": 25
}
```

7. Salve

**Teste**: Clique em **"Send"** ✅

---

## Testes Automatizados no Bruno

### Adicionando Testes

Na aba **"Tests"** de cada requisição:

```javascript
// Health Check
test("Status deve ser 200", function() {
  expect(res.status).to.equal(200);
});

test("Deve retornar status OK", function() {
  expect(res.body.status).to.equal("OK");
});

// Get All Users
test("Deve retornar array", function() {
  expect(res.body).to.be.an('array');
});

test("Usuários têm campos obrigatórios", function() {
  const user = res.body[0];
  expect(user).to.have.property('id');
  expect(user).to.have.property('name');
  expect(user).to.have.property('email');
});

// Create User
test("Status deve ser 201", function() {
  expect(res.status).to.equal(201);
});

test("Deve retornar usuário criado", function() {
  expect(res.body).to.have.property('user');
  expect(res.body.user.email).to.equal('novo@email.com');
});
```

---

## Organizando Requisições

Crie pastas para organizar:

```
IMPA Tech API/
├── 🏥 Health/
│   └── Health Check
├── 👤 Users/
│   ├── Get All Users
│   ├── Get User by ID
│   └── Create User
└── 📚 Disciplines/ (futuro)
```

---

## Dicas do Bruno

1. **Variáveis**: Use `{{variavel}}` para reutilizar valores
2. **Atalhos**:
   - `Ctrl+N` - Nova requisição
   - `Ctrl+S` - Salvar
   - `Ctrl+Enter` - Enviar
3. **Git**: Bruno salva em arquivos `.bru` - faça commit!
4. **Scripts**: Aba "Scripts" para lógica antes/depois da requisição
5. **Docs**: Aba "Docs" para documentar cada endpoint

---

## Exportar Coleção (Compartilhar com Time)

Todos os arquivos `.bru` já estão na pasta do projeto!

```bash
# Compartilhar via Git
git add bruno/
git commit -m "Add Bruno collection"
git push

# Outros membros só precisam:
# 1. Instalar Bruno
# 2. Abrir a pasta do projeto no Bruno
```

---

## Comparação Bruno vs Postman

| Feature | Bruno | Postman |
|---------|-------|---------|
| Open Source | ✅ | ❌ |
| Git-friendly | ✅ | ⚠️ |
| Offline | ✅ | ⚠️ |
| Gratuito | ✅ | ⚠️ |
| Interface | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Colaboração | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

---

**Pronto!** Agora você sabe tudo sobre a API e como testá-la no Bruno! 🚀