import express from 'express';
import doctoresSchema from '../models/doctores';

const router = express.Router();

// crear doctores
router.post('/crear-doctor', (req, res) => {
    const user = new doctoresSchema(req.body);
    const nombre = req.body.nombre;
    user
    .save()
    .then((data: any) => {
       res.json({ message: `se creo el doctor ${nombre}`, data });
     })
    .catch((error: any) => res.json({ message: error }));
});

// obtener todos los doctores
router.get('/obtener-doctores', (req, res) => {
    doctoresSchema
        .find()
        .then((data: any) => res.json(data))
        .catch((error: any) => res.json({ message: error}));
});

// obtener solo un doctor
router.get('/obtener-doctor/:id', (req, res) => {
    const { id } = req.params;
    doctoresSchema
        .findById(id)
        .then((data: any) => res.json(data))
        .catch((error: any) => res.json({ message: error}));
});

// actualizar doctor
router.put('/actualizar-doctor/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, identificacion, apellido, edad, telefono } = req.body;
    doctoresSchema
        .updateOne({_id: id }, { $set: { nombre, identificacion, apellido, edad, telefono }})
        .then((data: any) => res.json(data))
        .catch((error: any) => res.json({ message: error}));
});

// eliminar doctor
router.delete('/eliminar-doctor/:id', (req, res) => {
    const { id } = req.params;
    doctoresSchema
        .deleteOne({_id: id })
        .then((data: any) => res.json(data))
        .catch((error: any) => res.json({ message: error}));
});


export default router;