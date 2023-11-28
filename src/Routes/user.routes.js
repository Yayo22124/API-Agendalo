import express from 'express';
import userController from '../Controllers/user.controller.js';
import authenticateUser from '../middleware/auth.js'

const router = express.Router();
 
//! RUTAS PUBLICAS SIN AUTENTICACION
router.post('/login', userController.login); // RUTA PARA EL INICIO DE SESION

router.get('/getAll', userController.getAll);
router.get('/getOne/:id', userController.getOne);
router.post('/create', userController.createUser);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

export default router;