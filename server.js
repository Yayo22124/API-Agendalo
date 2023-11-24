import express from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use('/api', userRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
