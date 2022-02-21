import { useState, useEffect } from 'react';
import { Appointment } from './components/Appointment';
import { Formulario } from "./components/Formulario";

function App() {

  // Appointments in Local Storage
  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if (!initialAppointments) {
    initialAppointments = [];
  }

  // Appointments array
  const [ appointments, saveAppointments ] = useState(initialAppointments);

  // useEffect
  useEffect(() => {
    let initialAppointments = JSON.parse(localStorage.getItem('appointments'));

    if (initialAppointments) {
      localStorage.setItem('appointments', JSON.stringify(appointments))
    } else{
      localStorage.setItem('appointments', JSON.stringify([]));
    }
  }, [appointments])


  // Appointments function
  const createAppointment = cita => {
    saveAppointments([
      ...appointments,
      cita
    ])
  }

  // Function that removes appointments
  const removeAppointment = id => {
    const newAppointments = appointments.filter(appointment => appointment.id !== id);
    saveAppointments(newAppointments)
  }

  const title = appointments.length !== 0 ? <h2>Citas</h2> : <h2>No hay citas</h2>;

  return (
    <>
      <h1>Administrador de pacientes</h1>

      <div className="container">

        <div className="row">

          <div className="one-half column">
            <Formulario createAppointment={createAppointment} />
          </div>

          <div className="one-half column">
            { title }
            {
              appointments.map( appointment =>(
                <Appointment
                  key={appointment.id}
                  appointment={appointment}
                  removeAppointment={removeAppointment}
                />
              ))}
          </div>

        </div>

      </div>
    </>
  );
}

export default App;
