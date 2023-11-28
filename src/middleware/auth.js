// TODO middleware 
import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { secretKey } from '../Config/keys.js';

const verifyToken = promisify(jwt.verify);

const authenticateUser = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ msg: 'Acceso denegado. Token no proporcionado.' });
  }

  try {
    // VERIFICAR Y DECODIFICAR EL TOKEN
    const decoded = await verifyToken(token, secretKey);

    // SE ADJUNTA EL USUARIO QUE SE DECODIFICO A LA SOLICITUD
    req.user = decoded.user;

    next(); // SE SIGUE...
  } catch (error) {
    res.status(401).json({ msg: 'Token no válido.' });
  }
};

export default authenticateUser;
