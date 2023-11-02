import { Input, Button } from '../components'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks'
import { useState } from 'react'

import styles from '../styles/Login.module.css'

const initialForm = {
  contra1: '',
  contra2: ''
}

export const NuevaContra = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [errorPass, setErrorPass] = useState(false)
  const navigate = useNavigate()

  const {
    handleInputChange,
    handleResetForm,
    formState
  } = useForm({
    initialForm
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    if (formState.contra1 === formState.contra2) {
      setErrorPass(false)
      setFormSubmitted(false)
      handleResetForm()
      navigate('auth/login')
    }
    setErrorPass(true)
  }
  return (
    <div className={styles.authPage}>
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3 className={styles.title}>Nueva contraseña</h3>

          <Input
            placeholder="Ingresa tu contraseña..."
            label="Contraseña"
            name="contra1"
            type="password"
            value={formState.contra1}
            onChange={handleInputChange}

          />

          <Input
            placeholder="Ingresa tu contraseña..."
            label="Contraseña"
            name="contra2"
            type="password"
            value={formState.contra2}
            onChange={handleInputChange}

          />

        <Button
          backgroundColor="#c75200"
          buttonText="Cambiar contraseña"

        />
        <span className={errorPass ? styles.errorPass : styles.none}>Las contraseñas deben ser iguales</span>

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
