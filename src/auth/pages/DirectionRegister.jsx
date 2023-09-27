import { Input, Button, InputComboBox } from '../components'
import { Link, useNavigate } from 'react-router-dom'

import styles from '../styles/Login.module.css'
import { useState } from 'react'
import { useForm } from '../../hooks'

const initialForm = {
  comuna: null,
  calle: '',
  numero: ''
}

const formValidations = {
  comuna: [(value) => value !== 'Seleccione', 'Debes ingresar una comuna'],
  calle: [(value) => value.length >= 1, 'La calle es requerida'],
  numero: [(value) => value.length >= 1, 'El numero es requerido']

}

export const DirectionRegister = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const {
    handleInputChange,
    handleResetForm,
    formState,

    comunaValid,
    calleValid,
    numeroValid,
    isFormValid

  } = useForm({
    initialForm,
    formValidations
  })

  console.log(formState)

  const navigate = useNavigate()

  // const storedUser = localStorage.getItem('userRegister') || null
  // const user = JSON.parse(storedUser)
  // console.log(user)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)

    if (isFormValid) {
      handleResetForm()
      setFormSubmitted(false)
      navigate('/')
    }
  }
  return (
    <div className={styles.authPage}>
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3 className={styles.title}>Direccion</h3>
          <InputComboBox
          label='Comuna'
          name='comuna'
          value={formState.comuna}
          onChange={handleInputChange}
          error={comunaValid && formSubmitted}
          errorMsg = {comunaValid}
          />
        <div className={styles.twoInputs}>
          <Input
            placeholder="Calle..."
            label="Calle"
            name="calle"
            type="text"
            value={formState.calle}
            onChange={handleInputChange}
            error={calleValid && formSubmitted}
            errorMsg = {calleValid}
          />

          <Input
            placeholder="Número..."
            label="Numero"
            name="numero"
            type="text"
            value={formState.numero}
            onChange={handleInputChange}
            error={numeroValid && formSubmitted}
            errorMsg ={numeroValid}
          />
        </div>

        <Button
          backgroundColor="#c75200"
          buttonText="Crear Cuenta"

        />
        <span className={styles.link}>
          Ya tienes cuenta? <Link to="/auth/login">Inicia Sesión</Link>
        </span>
      </form>
    </div>
    <div className={styles.backgroundDark}>

    </div>
  </div>
  )
}
