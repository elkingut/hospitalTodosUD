import express from 'express';
import pacientesSchema from '../models/crearPaciente';

const router = express.Router();

// crear pacientes
router.post('/pacientes', (req, res) => {
    console.log(req.body);
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
    console.log(res);
    pacientesSchema
        .find()
        .then((data: any) => res.json(data))
        .catch((error: any) => res.json({ message: error}));
});

// obtener solo un paciente
router.get('/paciente/:id', (req, res) => {
    const { id } = req.params;
    pacientesSchema
        .findById(id)
        .then((data: any) => res.json(data))
        .catch((error: any) => res.json({ message: error}));
});

// obtener solo un paciente
router.get('/paciente/:nombre', (req, res) => {
    const { nombre } = req.params;
    pacientesSchema
     .find({ nombre })
     .then((data: any) => res.json(data))
     .catch((error: any) => res.json({ message: error }));
  });

// actualizar paciente
router.put('/paciente/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, identificacion, apellido, edad, telefono } = req.body;
    pacientesSchema
        .updateOne({_id: id }, { $set: { nombre, identificacion, apellido, edad, telefono }})
        .then((data: any) => res.json(data))
        .catch((error: any) => res.json({ message: error}));
});

// eliminar paciente
router.delete('/paciente/:id', (req, res) => {
    const { id } = req.params;
    pacientesSchema
        .deleteOne({_id: id })
        .then((data: any) => res.json(data))
        .catch((error: any) => res.json({ message: error}));
});


export default router;