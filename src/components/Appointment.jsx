import PropTypes from 'prop-types'

export const Appointment = ({appointment, removeAppointment}) => {

  const { pet, owner, date, time, symptom } = appointment;

  return (
    <div className="appointment">
      <p>Mascota: <span>{ pet }</span></p>
      <p>Dueño: <span>{ owner }</span></p>
      <p>Fecha: <span>{ date }</span></p>
      <p>Hora: <span>{ time }</span></p>
      <p>Síntomas: <span>{ symptom }</span></p>

      <button
        className="button delete u-full-width"
        onClick={() => removeAppointment(appointment.id)}
      >
        Eliminar &times;
      </button>
    </div>
  )
}

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  removeAppointment: PropTypes.func.isRequired
}