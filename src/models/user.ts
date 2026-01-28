export interface IUser {
  id: number;
  name: string;
  email: string;
  age?: number;
  createdAt: Date;
  updatedAt: Date;
}

// Banco de dados em memória (simulação)
let users: IUser[] = [
  { 
    id: 1, 
    name: 'João Silva', 
    email: 'joao@email.com', 
    age: 25,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  { 
    id: 2, 
    name: 'Maria Santos', 
    email: 'maria@email.com', 
    age: 30,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

let currentId = 2;

export class User {
  // GET - Listar todos os usuários
  static findAll(): IUser[] {
    return users;
  }

  // GET - Buscar usuário por ID
  static findById(id: number): IUser | undefined {
    return users.find(user => user.id === id);
  }

  // POST - Criar novo usuário
  static create(userData: Omit<IUser, 'id' | 'createdAt' | 'updatedAt'>): IUser {
    currentId++;
    const newUser: IUser = {
      id: currentId,
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    users.push(newUser);
    return newUser;
  }

  // Verificar se email já existe
  static emailExists(email: string): boolean {
    return users.some(user => user.email === email);
  }
}