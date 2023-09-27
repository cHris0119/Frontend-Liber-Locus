import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Input, Button } from '../components/'
import { useForm } from '../../books/hooks/useForm'

import { AuthContext } from '../context/AuthContext'

import styles from '../styles/Login.module.css'

const initialForm = {
  email: '',
  password: ''
}

const formValidations = {
  email: [(value) => value.includes('@') && value.length >= 1, 'Debe ser un email valido'],
  password: [(value) => value.length >= 1, 'La contraseña es requerida']
}

export const Login = ({ setLoggedIn }) => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const {
    handleInputChange,
    handleResetForm,
    formState,

    emailValid,
    passwordValid,
    isFormValid

  } = useForm({
    initialForm,
    formValidations
  })

  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const handleSubmit = (event) => {
    event.preventDefault()

    setFormSubmitted(true)
    if (isFormValid) {
      handleResetForm()
      login('Chris')
      navigate('/home', {
        replace: true
      })
    }
  }

  return (
    <div className={styles.authPage}>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3 className={styles.title}>Inicio de Sesión</h3>
          <Input
            placeholder="Ingresa tu correo..."
            label="Correo"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleInputChange}
            error={emailValid && formSubmitted}
            errorMsg = {emailValid}
          />

          <Input
            placeholder="Ingresa tu contraseña..."
            label="Contraseña"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleInputChange}
            error={passwordValid && formSubmitted}
            errorMsg={passwordValid}
          />
          <Button
            backgroundColor="#c75200"
            buttonText="Iniciar Sesión"
            disa={false}
          />

          <span className={styles.link}>
          Aun no tienes cuenta? <Link to="/auth/registro">Registrate</Link>
          </span>
          <span className={styles.link}>
           <Link to="/auth/recuperarContra">Olvidaste tu contraseña?</Link>
          </span>
        </form>
      </div>
      <div className={styles.backgroundDark}>

      </div>
    </div>

  )
}
