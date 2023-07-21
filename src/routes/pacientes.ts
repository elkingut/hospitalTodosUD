import express from 'express';
import pacientesSchema from '../models/pacientes';

const router = express.Router();

// crear pacientes
router.post('/pacientes', (req, res) => {
    const user = new pacientesSchema(req.body);
    const nombre = req.body.nombre;
    user
    .save()
    .then((data: any) => {
       res.json({ message: `Hola ${nombre}, gracias por la informacion`, data });
     })
    .catch((error: any) => res.json({ message: error }));
});

// obtener todos los pacientes
router.get('/pacientes', (req, res) => {
    pacientesSchema
        .find()
        .then((data: any) => res.json(data))
        .catch((error: any) => res.json({ message: error}));
});

// obtener solo un paciente
router.get('/pacientes/:id', (req, res) => {
    const { id } = req.params;
    pacientesSchema
        .findById(id)
        .then((data: any) => res.json(data))
        .catch((error: any) => res.json({ message: error}));
});

// actualizar paciente
router.put('/pacientes/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, identificacion, apellido, edad, telefono } = req.body;
    pacientesSchema
        .updateOne({_id: id }, { $set: { nombre, identificacion, apellido, edad, telefono }})
        .then((data: any) => res.json(data))
        .catch((error: any) => res.json({ message: error}));
});

// eliminar paciente
router.delete('/pacientes/:id', (req, res) => {
    const { id } = req.params;
    pacientesSchema
        .deleteOne({_id: id })
        .then((data: any) => res.json(data))
        .catch((error: any) => res.json({ message: error}));
});


export default router;