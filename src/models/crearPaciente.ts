import mongoose from 'mongoose';

const pacientesSchema = new mongoose.Schema({
    nombre: {
        type: String,
    },
    identificacion: {
        type: Number,
    },
    apellido: {
        type: String,
    },
    edad: {
        type: String,
    },
    telefono: {
        type: String,
    }
});

export default mongoose.model('pacientes', pacientesSchema);