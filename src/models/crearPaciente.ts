import mongoose from 'mongoose';

const pacientesSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    identificacion: {
        type: Number,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    edad: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    }
});


export default mongoose.model('pacientes', pacientesSchema);