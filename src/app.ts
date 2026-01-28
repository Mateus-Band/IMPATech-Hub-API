import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

// Carrega variáveis de ambiente
dotenv.config();

// Importar rotas
import userRoutes from './routes/userRoutes';

const app = express();

// Middlewares
app.use(helmet()); // Segurança
app.use(cors());   // CORS
app.use(express.json()); // Parse JSON
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/api/users', userRoutes);

// Rota de estado
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Rota padrão
app.get('/', (req, res) => {
  res.json({ 
    message: 'API Simples',
    version: '1.0.0',
    endpoints: {
      users: '/api/users',
      health: '/health'
    }
  });
});

// Middleware para rotas não encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

export default app;