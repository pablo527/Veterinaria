import React, {Fragment,useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import clienteAxios from '../config/axios';
const NuevaCita = (props) => {

    // Declaramos el state de la app
    const [cita, guardarCita] = useState({
        nombre: '',
        propietario: '',
        fecha: '',
        telefono: '',
        hora: '',
        sintomas: ''

    })

    //Leemos los datos del fromulario
    const actualizarState = e => {
        //los ... me guardan una copia del estado actual
        guardarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }
    //hacemos una peticion a la API
    const crearNuevaCita = e => {
        e.preventDefault();

        // peticion axios
        clienteAxios.post('/pacientes', cita)
            .then(respuesta => {
                console.log(respuesta)
                props.guardarConsulta(true)
            })
            .catch(error => {
                console.log(error)
            })

        // Redireccionar a la vista principal
        props.history.push('/')
        
    }



    return ( 

        <Fragment>
         <div className="container mt-5 py-5">
            <div className="row">
                <div className="col-12 mb-5 d-flex justify-content-center">
                    <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Cresr cita</Link>

               </div>

               <div className="col-md-8 mx-auto">
               <form className="bg-white p-5 bordered" onSubmit={crearNuevaCita}>

                    <div className="form-group">
                        <label htmlFor="nombre">Nombre Mascota</label>
                        <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            id="nombre" 
                            name="nombre" 
                            placeholder="Nombre Mascota" 
                            onChange= {actualizarState}
                        />
                     </div>

                    <div className="form-group">
                        <label htmlFor="propietario">Nombre Propietario</label>
                        <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            id="propietario" 
                            name="propietario" 
                            placeholder="Nombre Propietario" 
                            onChange= {actualizarState}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="telefono">Teléfono</label>
                        <input 
                            type="tel" 
                            className="form-control form-control-lg" 
                            id="telefono" 
                            name="telefono" 
                            placeholder="Teléfono" 
                            onChange= {actualizarState}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="fecha">Fecha Alta</label>
                        <input 
                            type="date" 
                            className="form-control form-control-lg" 
                            id="fecha" 
                            name="fecha"  
                            onChange= {actualizarState}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="hora">Hora Alta</label>
                        <input 
                            type="time" 
                            className="form-control form-control-lg" 
                            id="hora" 
                            name="hora"  
                            onChange= {actualizarState}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="sintomas">Síntomas</label>
                        <textarea 
                            className="form-control" 
                            name="sintomas" 
                            rows="6"
                            onChange= {actualizarState}
                        ></textarea>
                    </div>


                    <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Crear Cita"  />
                </form>

               </div>
            </div>   
        </div>  

        </Fragment>

     );
}
 
export default withRouter( NuevaCita);