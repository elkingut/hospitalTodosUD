import mongoose from 'mongoose';

const doctoresSchema = new mongoose.Schema({
    nombre: {
        type: String,
    },
    apellido: {
        type: String,
    },
    especialidad: {
        type: Array,
    },
    consultorio: {
        type: String,
    },
    correo: {
        type: String,
    }
});


export default mongoose.model('doctores', doctoresSchema);