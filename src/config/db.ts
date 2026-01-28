// Exemplo de configuração de banco de dados
// Por enquanto estamos usando dados em memória

export const dbConfig = {
  // Configurações do banco de dados
  // Exemplo para MySQL/PostgreSQL:
  // host: process.env.DB_HOST || 'localhost',
  // port: parseInt(process.env.DB_PORT || '3306'),
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_NAME,
  
  // Para dados em memória
  type: 'memory' as const,
  description: 'Banco de dados em memória para desenvolvimento'
};