import Person from '../Models/Person.js';
import User from '../Models/User.js';
import bcrypt from 'bcrypt';
import express from 'express';

const userController = {};

// TODO: OBTENER TODOS LOS USUARIOS
userController.getAll = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'ERROR GETTING USERS' });
  }
};

// TODO: OBTENER USUARIO POR ID
userController.getOne = async (req, res) => {
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
};

// !PROBANDO ...
userController.createUser = async (req, res) => {
  const { name, lastName, email, title, gender, birthDate, password } = req.body;

  try {
    // CREAR PRIMERO A LA PERSONA
    const newPerson = await Person.create({
      name,
      lastName,
      birthDate,
      gender,
      title,
    });

    // OBTENER EL ID DE LA PERSONA CREADA
    const personId = newPerson.id;

    // CREAR AL USUARIO
    const newUser = await User.create({
      email,
      password,
      personId,
    });

    res.status(200).json({
      status: true,
      msg: "User successfully created",
    });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ status: false, msg: 'Error al crear usuario.', error });
  }
};


// TODO: ACTUALIZA UN USUARIO
userController.updateUser = async (req, res) => {
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
};

// TODO: ELIMINAR USUARIO
userController.deleteUser = async (req, res) => {
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
};

export default userController;