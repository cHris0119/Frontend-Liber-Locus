import { Input, Button, InputComboBox } from '../components'
import { Link, useNavigate } from 'react-router-dom'

import styles from '../styles/Login.module.css'
import { useState } from 'react'
import { useForm, useAuthStore } from '../../hooks'

const initialForm = {
  comuna: 'Seleccione',
  calle: '',
  numero: '',
  nameDir: ''
}

const formValidations = {
  comuna: [(value) => value !== 'Seleccione', 'Debes ingresar una comuna'],
  calle: [(value) => value.length >= 1, 'La calle es requerida'],
  numero: [(value) => value.length >= 1 && !isNaN(parseInt(value)), 'El numero es requerido'],
  nameDir: [(value) => value.length >= 1, 'El numero es requerido']

}

export const DirectionRegister = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { startRegister } = useAuthStore()

  const {
    handleInputChange,
    handleResetForm,
    formState,

    comunaValid,
    calleValid,
    numeroValid,
    nameDirValid,
    isFormValid

  } = useForm({
    initialForm,
    formValidations
  })

  const navigate = useNavigate()

  const storedUser = localStorage.getItem('userRegister') || null
  const user = JSON.parse(storedUser)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)

    if (isFormValid) {
      const { comuna, calle, numero, nameDir } = formState
      handleResetForm()
      setFormSubmitted(false)
      const userToCreate = {
        nameDir,
        calle,
        numero: parseInt(numero),
        idCom: parseInt(comuna),
        ...user,
        photoDir: 'Hola'
      }

      startRegister(userToCreate)

      navigate('/')
    }
  }
  return (
    <div className={styles.authPage}>
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3 className={styles.title}>Direccion</h3>

        <Input
              placeholder="Casa, trabajo..."
              label="Nombre"
              name="nameDir"
              type="text"
              value={formState.nameDir}
              onChange={handleInputChange}
              error={nameDirValid && formSubmitted}
              errorMsg = {nameDirValid}
            />

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
