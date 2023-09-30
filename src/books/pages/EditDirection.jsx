import { useNavigate } from 'react-router-dom'
import { Input } from '../components/Input/Input'

import { InputComboBox } from '../../auth/components'
import { useEffect, useState } from 'react'
import { useForm } from '../../hooks'
import booksApi from '../../api/booksApi'

import styles from '../styles/EditDirection.module.css'
import { useSelector } from 'react-redux'
import { Loader } from '../components'
import { useDirection } from '../hooks/useDirection'

// const formValidations = {
//   comuna: [(value) => value !== 'Seleccione', 'Debes ingresar una comuna'],
//   calle: [(value) => value.length >= 1, 'La calle es requerida'],
//   numero: [(value) => value.length >= 1 && !isNaN(parseInt(value)), 'El numero es requerido'],
//   nameDir: [(value) => value.length >= 1, 'El numero es requerido']

// }

export const EditDirection = () => {
  const navigate = useNavigate()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const { Loading, initialForm } = useDirection()
  const [formState, setFormState] = useState(initialForm)
  console.log('dire', initialForm)

  const handleInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  console.log('for', formState)
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)

    if (isFormValid) {
      const { comuna, calle, numero, nameDir } = formState
      handleResetForm()
      setFormSubmitted(false)
      console.log(formState)
      // navigate('/editarPefil')
    }
  }
  return (

    <div className={styles.editAccountContainer}>

      {Loading
        ? (
        <div>
          <Loader />
        </div>
          )
        : (

  <form
        className={styles.editAccountForm}
        onSubmit={handleSubmit}
        >
            <h1>Editar Dirección</h1>

            <Input
              placeholder="Casa, trabajo..."
              label="Nombre"
              name="nameDir"
              type="text"
              value={formState.nameDir}
              onChange={handleInputChange}

            />

          <InputComboBox
          label='Comuna'
          name='comuna'
          value={formState.comuna}
          onChange={handleInputChange}

          />
        <div className={styles.twoInputs}>
          <Input
            placeholder="Calle..."
            label="Calle"
            name="calle"
            type="text"
            value={formState.calle}
            onChange={handleInputChange}

          />

          <Input
            placeholder="Número..."
            label="Numero"
            name="numero"
            type="text"
            value={formState.numero}
            onChange={handleInputChange}

          />
           </div>

            <button
            className={styles.saveChanges}
            >
                Guardar cambios
            </button>
        </form>
          )}

    </div>
  )
}
