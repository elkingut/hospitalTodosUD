import mongoose from 'mongoose';

const doctoresSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    especialidad: {
        type: Array,
        required: true
    },
    consultorio: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    }
});


export default mongoose.model('doctores', doctoresSchema);