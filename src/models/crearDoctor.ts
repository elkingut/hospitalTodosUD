import mongoose from 'mongoose';

const doctoresSchema = new mongoose.Schema({
    nombre: {
        type: String,
    },
    apellido: {
        type: String,
    },
    especialidad: {
        type: String,
    },
    consultorio: {
        type: String,
    },
    correo: {
        type: String,
    }
});


export default mongoose.model('doctores', doctoresSchema);