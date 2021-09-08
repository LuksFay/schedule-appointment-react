import React, {useState} from "react";

const Formulario = () => {

    //Crear State de Citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario:'',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const [error, actualizarError] = useState(false)

    // Funcion que se ejecuta cada que el usuario escribe en un input
    const handleChange = (e) => {
           actualizarCita({
               ...cita,
               [e.target.name]: e.target.value 
           })
    }
    //NANANA

    // Extraer los valores
    const {mascota,propietario,fecha,hora,sintomas}= cita;

    // Cuando el usuario presiona agregar cita

    const submitCita = (e) => {
        e.preventDefault();
        // Validar

        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
           actualizarError(true)
            return 
        }

        // Eliminar el mensaje de error
        actualizarError(false);
        // Asignar un ID
            console.log(cita);
        // Crear la cita

        // Reiniciar el form
    }



    return(
        <>
        <h2>Crear Cita</h2>
        <form onSubmit={submitCita}>

            <label>Nombre Mascota</label>
            <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" onChange={handleChange} value={mascota}/>

            <label>Nombre Dueño</label>
            <input type="text" name="propietario" className="u-full-width" placeholder="Nombre Dueño de la mascota" onChange={handleChange} value={propietario}/>

            <label>Fecha</label>
            <input type="date" name="fecha" className="u-full-width" onChange={handleChange} value={fecha}/>

            <label>Hora</label>
            <input type="time" name="hora" className="u-full-width" onChange={handleChange} value={hora}/>

            <label>Síntomas</label>
            <textarea className="u-full-width" name="sintomas" onChange={handleChange} value={sintomas}></textarea>

            <button className="u-full-width button-primary">Agregar Cita</button>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
        </form>
        </>
    );
}
export default Formulario;