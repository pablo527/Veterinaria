const Paciente = require('../models/Paciente');


// funcion al crear un usuario
exports.nuevoCliente = async (req, res, next) => {
    // todos: insertar a la base de datos
    // crear el objeto
    const paciente = new Paciente(req.body);
    try {
        await paciente.save();
        res.json({ mensaje : 'Cliente insertado sastifactoriamente'});

        
    } catch (error) {
        console.log(error);
        next();
    }
    
}

// funcion para obtener los datos
exports.obtenerPacientes = async (req,res,next) => {
    try {
        const pacientes = await Paciente.find({});
        res.json(pacientes); 
        
    } catch (error) {
        console.log(error);
        next();
    }
}

// funcion para obtener un cliente por id
exports.obtenerPaciente = async (req,res,next) => {
    try {
        const paciente = await Paciente.findById(req.params.id)
        res.json(paciente)
        
    } catch (error) {
        console.log(error)
        next();
        
    }
}

// funcion para actualizar en paciente

exports.actualizarPaciente = async (req,res,next) => {
    try {
        const paciente = await Paciente.findByIdAndUpdate({_id : req.params.id}, req.body , {
            next: true
        })
        res.json(paciente);
        
    } catch (error) {
        console.log(error)
        next()
    }
    
}

// funcion para eliminar paciente

exports.eliminarPaciente = async (req, res, next) => {
    try {
       
        await Paciente.findByIdAndDelete({_id: req.params.id})
        res.json({mensaje : 'usuario eliminado sastifactoriamente'})

    } catch (error) {
        console.log(error)
        next();
    }
}