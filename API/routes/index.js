const express = require('express')
const router = express.Router();
const pacienteController = require('../controllers/pacienteController')


module.exports = function() {

    // agregamos clientes con POST
    router.post('/pacientes',
        pacienteController.nuevoCliente
    )

    // obtener clientes 
    router.get('/pacientes',
        pacienteController.obtenerPacientes
    )

    // obtener paciente por id
    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    )

    // Actualizar registro de la bd
    router.put('/pacientes/:id',
        pacienteController.actualizarPaciente
    )

    // elminar algun paciente
    router.delete('/pacientes/:id',
        pacienteController.eliminarPaciente
    )


    return router;
}