import { Router } from 'express';
import { UserController } from '../controllers/controller';

const router = Router();

// Rotas GET
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);

// Rota POST
router.post('/', UserController.createUser);

export default router;