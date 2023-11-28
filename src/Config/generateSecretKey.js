// TODO: HACER LA LLAVE SECRETA

import { randomBytes } from 'crypto';

const generateSecretKey = () => {
  return randomBytes(32).toString('hex');
};

export default generateSecretKey;
