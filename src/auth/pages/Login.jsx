import { Link } from 'react-router-dom'
import { useForm, useAuthStore } from '../../hooks'
import { useEffect, useState } from 'react'
import { Input, Button } from '../components/'

import styles from '../styles/Login.module.css'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

const initialForm = {
  email: '',
  password: ''
}

const formValidations = {
  email: [(value) => value.includes('@') && value.length >= 1, 'Debe ser un email valido'],
  password: [(value) => value.length >= 8, 'La contraseña es requerida.']
}

export const Login = () => {
  localStorage.clear('userRegister')
  const { status } = useSelector(state => state.auth)
  const { startLogin, errorMessage } = useAuthStore()

  const [formSubmitted, setFormSubmitted] = useState(false)

  const {
    handleInputChange,
    handleResetForm,
    formState,

    email,
    password,
    emailValid,
    passwordValid,
    isFormValid

  } = useForm({
    initialForm,
    formValidations
  })

  // const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    setFormSubmitted(true)
    if (isFormValid) {
      handleResetForm()
      setFormSubmitted(false)
      startLogin({ email, password })
    }
  }

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire('Error en la autenticación', errorMessage, 'error')
    }
  }, [errorMessage])

  return (
    <div className={styles.authPage}>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3 className={`${styles.title}`}>INICIO DE SESIÓN</h3>
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
            buttonText={
              status === 'checking' ? 'Cargando...' : 'Iniciar Sesión' }
            disa={status === 'checking'}
          />

          <span className={styles.link}>
          Aun no tienes cuenta? <Link to="/auth/registro">Registrate</Link>
          </span>
          {/* <span className={styles.link}>
           <Link to="/auth/recuperarContra">Olvidaste tu contraseña?</Link>
          </span> */}
        </form>
      </div>
      <div className={styles.backgroundDark}>

      </div>
    </div>

  )
}
