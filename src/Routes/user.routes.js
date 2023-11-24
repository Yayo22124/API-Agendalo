import express from 'express';
import userController from '../Controllers/user.controller';

const router = express.Router();

// TODO: RUTAS PARA EL MODELO
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

export default router;