import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../components/Input/Input'

import styles from '../styles/EditAccount.module.css'
import { useSelector } from 'react-redux'
import { useAuthStore, useForm } from '../../hooks'
import { useState } from 'react'

const formValidations = {
  firstName: [(value) => value.length >= 1, 'Debe ser un nombre valido'],
  lastName: [(value) => value.length >= 1, 'Debe ser un apellido valido'],
  userPhoto: [(value) => value.length >= 1, 'Debe ser una foto valida valido']

}

export const EditAccount = () => {
  const { user } = useSelector(state => state.auth)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { startEditUser } = useAuthStore()

  const initialForm = {
    userPhoto: user.userPhoto,
    firstName: user.firstName,
    lastName: user.lastName
  }

  const navigate = useNavigate()

  const {
    handleInputChange,
    handleResetForm,
    formState,

    firstName,
    lastName,
    userPhoto,
    firstNameValid,
    lastNameValid,
    userPhotoValid,
    isFormValid

  } = useForm({
    initialForm,
    formValidations
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    if (isFormValid) {
      handleResetForm()
      setFormSubmitted(false)
      startEditUser({
        firstName,
        lastName,
        userPhoto,
        id: user.id
      })
      navigate('/perfil/misPost')
    }
  }
  return (
    <div className={styles.editAccountContainer}>

        <form
        className={styles.editAccountForm}
        onSubmit={handleSubmit}
        >
            <h1>Editar Cuenta</h1>

            <Input
            label='Image'
            type='text'
            value={formState.userPhoto}
            name='userPhoto'
            onChange={handleInputChange}
            error={userPhotoValid && formSubmitted}
            errorMsg = {userPhotoValid}
            />

            <Input
            label='Nombre'
            type='text'
            value={formState.firstName}
            name='firstName'
            onChange={handleInputChange}
            error={firstNameValid && formSubmitted}
            errorMsg = {firstNameValid}
            />

            <Input
            label='Apellido'
            type='text'
            value={formState.lastName}
            name='lastName'
            onChange={handleInputChange}
            error={lastNameValid && formSubmitted}
            errorMsg = {lastNameValid}
            />

            <div className={styles.editOthers}>

            <span className={styles.link}>
                    <Link to='/editarDireccion'>
                        Editar contraseña
                    </Link>
                </span>

                <span className={styles.link}>
                    <Link to='/editarDireccion'>
                        Editar dirección
                    </Link>
                </span>

                <span className={styles.link}>
                    <Link>
                        Editar Metodo de pago
                    </Link>
                </span>

            </div>

            <button
            className={styles.saveChanges}
            >
                Guardar cambios
            </button>
        </form>
    </div>
  )
}
