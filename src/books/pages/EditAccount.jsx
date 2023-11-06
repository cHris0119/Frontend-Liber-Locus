import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../components/Input/Input'

import { useSelector } from 'react-redux'
import { useAuthStore, useForm } from '../../hooks'
import { useState } from 'react'

import styles from '../styles/EditAccount.module.css'

const formValidations = {
  firstName: [(value) => value.length >= 1, 'Debe ser un nombre valido'],
  lastName: [(value) => value.length >= 1, 'Debe ser un apellido valido']

}

export const EditAccount = () => {
  const { user } = useSelector(state => state.auth)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { startEditUser } = useAuthStore()

  const initialForm = {
    userPhoto: null,
    firstName: user.firstName,
    lastName: user.lastName
  }

  const navigate = useNavigate()

  const {
    handleInputChange,
    handleResetForm,
    handleFileChange,
    formState,

    firstName,
    lastName,
    userPhoto,
    firstNameValid,
    lastNameValid,
    isFormValid

  } = useForm({
    initialForm,
    formValidations
  })

  console.log(formState)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    if (isFormValid) {
      handleResetForm()
      setFormSubmitted(false)
      await startEditUser({
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
            type='file'
            name='userPhoto'
            onChange={handleFileChange}
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
                        Editar dirección
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
