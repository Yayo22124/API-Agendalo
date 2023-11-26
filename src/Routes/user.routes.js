import express from 'express';
import userController from '../Controllers/user.controller.js';

const router = express.Router();

router.get('/getAll', userController.getAll);
router.get('/getOne/:id', userController.getOne);
router.post('/create', userController.createUser);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

export default router;