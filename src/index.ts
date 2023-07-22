import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import pacientesRoutes from './routes/pacientes';
import doctoresRoutes from './routes/doctores';
import path from 'path'

dotenv.config();
const app = express();
const port = process.env.PORT || 9000;

const MONGODB = "mongodb://localhost:27017/hospital" || process.env.MONGODB_URI;


// Middleware para parsear los datos del formulario
// app.use(express.urlencoded({ extended: true }));

// Middleware
app.use(express.json());
app.use('/api', pacientesRoutes);
app.use('/api', doctoresRoutes);

// Rutas
// Ruta para manejar la solicitud GET de la página HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/index.html'));
  });

// BD mongodb connection
mongoose
    .connect(MONGODB)
    .then(() => console.log('conectado a la base de datos'))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('servidor escuchando por el puerto', port));