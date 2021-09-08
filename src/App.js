import React, {useEffect, useState} from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {

  // Citas en local Storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  }

  // Arreglo citas
  const [citas, guardarCitas] = useState(citasIniciales)
  // Use Effect para realizxar ciertas operaciones cuando elstate cambia
  useEffect( () => {
    if(citasIniciales){
      localStorage.setItem('citas',JSON.stringify(citas))
    }else{
      localStorage.setItem('citas',JSON.stringify([]));
    }
  }, [citas, citasIniciales]);

  // Funcion que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
    guardarCitas([ ...citas, cita]);

  }
  //Funcion para eliminar las citas
  const eliminarCita = id => {
    console.log(id);
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas)
  }

  // Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas'
  return (
    <>
    <h1>Adminsitrador de Pacientes</h1>
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <Formulario crearCita={crearCita} />
        </div>
        <div className="one-half column">
          <h2>{titulo}</h2>
          {citas.map(cita => (
            <Cita key={cita.id} cita={cita} eliminarCita ={eliminarCita}/>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
