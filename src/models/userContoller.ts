import { Request, Response } from 'express';
import { User } from '../models/user';

export class UserController {
  // GET /api/users - Listar todos os usuários
  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
  }

  // GET /api/users/:id - Buscar usuário por ID
  static async getUserById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        return res.status(400).json({ error: 'ID inválido' });
      }

      const user = User.findById(id);
      
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
  }

  // POST /api/users - Criar novo usuário
  static async createUser(req: Request, res: Response) {
    try {
      const { name, email, age } = req.body;

      // Validação básica
      if (!name || !email) {
        return res.status(400).json({ 
          error: 'Nome e email são obrigatórios' 
        });
      }

      // Validar formato do email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          error: 'Email inválido' 
        });
      }

      // Verificar se email já existe
      if (User.emailExists(email)) {
        return res.status(409).json({ 
          error: 'Email já cadastrado' 
        });
      }

      const newUser = User.create({
        name,
        email,
        age: age ? parseInt(age) : undefined
      });

      res.status(201).json({
        message: 'Usuário criado com sucesso',
        user: newUser
      });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }
}