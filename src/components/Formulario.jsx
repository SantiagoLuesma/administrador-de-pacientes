import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

export const Formulario = ({ createAppointment }) => {

  const [ appointment, setAppointment ] = useState({
    pet: '',
    owner: '',
    date: '',
    time: '',
    symptom: ''
  });

  const [ error, setError ] = useState(false);

  const handleInputChange = ({target}) => {
    setAppointment({
      ...appointment,
      [target.name] : target.value,
    })
  }

  const { pet, owner, date, time, symptom } = appointment;

  const handleSubmit = e => {
    e.preventDefault();
    
    // Validation
    if (pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptom.trim() === '') {
      setError(true);
      return;
    }

    // Delete error message
    setError(false);

    // Assign id
    appointment.id = uuid();

    // Create appointment
    createAppointment(appointment)

    // Reset form
    setAppointment({
      pet: '',
      owner: '',
      date: '',
      time: '',
      symptom: ''
    })
  }

  return (
    <>
      <h2>Crear cita</h2>


      <form
        onSubmit={ handleSubmit }
      >

        <label>El nombre de la mascota es:</label>
        <input
          className="u-full-width"
          name="pet"
          placeholder="Bunki"
          type="text"
          onChange={ handleInputChange }
          value={ pet }
        />

        <label>El nombre del dueño es:</label>
        <input
          className="u-full-width"
          name="owner"
          placeholder="Santiago Luesma"
          type="text"
          onChange={ handleInputChange }
          value={ owner }
        />

        <label>Fecha:</label>
        <input
          className="u-full-width"
          name="date"
          type="date"
          onChange={ handleInputChange }
          value={ date }
          />

        <label>Hora:</label>
        <input
          className="u-full-width"
          name="time"
          type="time"
          onChange={ handleInputChange }
          value={ time }
        />

        <label>Los síntomas son:</label>
        <textarea
          className="u-full-width"
          name="symptom"
          placeholder="Vómito, mareos, etc."
          onChange={ handleInputChange }
          value={ symptom }
        />

        <button
          className="u-full-width button-primary"
          type="submit"
        >
          Agregar cita
        </button>

        {
          error ?
            <p
              className="u-full-width error-message"
            >
              Complete todos los campos
            </p> : null
        }

      </form>
    </>
  )

}

Formulario.propTypes = {
  createAppointment: PropTypes.func.isRequired
}
