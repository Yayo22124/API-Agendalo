import express from 'express';
import User from '../Models/User.js';
import bcrypt from 'bcrypt';

const router = express.Router();

// TODO: OBTENER TODOS LOS USUARIOS
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'ERROR GETTING USERS' });
  }
});

// TODO: OBTENER USUARIO POR ID
router.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404).json({ error: 'USER NOT FOUND' });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ error: 'ERROR GETTING USER' });
  }
});

// TODO: CREAR UN NUEVO USUARIO
router.post('/users', async (req, res) => {
  const { persona, email, password } = req.body;

  try {
    const newUser = await User.create({
      persona,
      email,
      password: await bcrypt.hash(password, 10),
    });

    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'ERROR CREATE USER' });
  }
});

// TODO: ACTUALIZA UN USUARIO
router.put('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const { persona, email, password } = req.body;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      res.status(404).json({ error: 'USER NOT FOUND' });
    } else {
      await user.update({
        persona,
        email,
        password: await bcrypt.hash(password, 10),
      });

      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ error: 'ERROR UPDATE USER' });
  }
});

// TODO: ELIMINAR USUARIO
router.delete('/users/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      res.status(404).json({ error: 'USER NOT FOUND' });
    } else {
      await user.destroy();
      res.json({ message: 'USER DELETE SUCCESSFU;' });
    }
  } catch (error) {
    res.status(500).json({ error: 'ERROR TO DELETE USER' });
  }
});

export default router;