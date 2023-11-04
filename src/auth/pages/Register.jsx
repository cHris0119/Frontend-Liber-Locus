import { useState } from 'react'

import { Input, Button, TermsButton, ModalTerms } from '../components'
import { Link, useNavigate } from 'react-router-dom'

import { useForm } from '../../hooks/'
import styles from '../styles/Login.module.css'

const initialForm = {
  imgUser: '',
  imgName: '',
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  terms: false
}

const passRegex = /^(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-])(?=.*[0-9])(?=.*[A-Z]).*$/

const formValidations = {
  email: [(value) => value.includes('@'), 'Debe ser un email valido'],
  password: [(value) => value.length >= 8 && passRegex.test(value), 'La contraseña debe tener más de 8 letras y contar con al menos un caracter especial, una mayuscula y un número'],
  firstname: [(value) => value.length >= 1, 'El nombre es requerido'],
  lastname: [(value) => value.length >= 1, 'El apellido es requerido'],
  terms: [(value) => value === true, 'No puedes continuar sin aceptar']
}

export const Register = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const {
    handleInputChange,
    handleCheckboxChange,
    handleResetForm,
    handleFileChange,
    formState,

    firstnameValid,
    lastnameValid,
    passwordValid,
    emailValid,
    termsValid,
    isFormValid

  } = useForm({
    initialForm,
    formValidations
  })

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    setFormSubmitted(true)
    if (isFormValid) {
      const { terms, ...rest } = formState
      const user = { ...rest }
      localStorage.setItem('userRegister', JSON.stringify(user))
      handleResetForm()
      setFormSubmitted(false)
      navigate('/auth/direccionRegistro')
    }
  }

  return (
    <div className={styles.authPage}>
      <div className={styles.formContainer}>
        <form
        className={styles.form}
        onSubmit={handleSubmit}>

          <h1 className={styles.title}>CREA TU CUENTA</h1>

          <div className={styles.twoInputs}>
            <Input
              placeholder="Nombre..."
              label="Nombre"
              name="firstname"
              type="text"
              value={formState.firstname}
              onChange={handleInputChange}
              error={firstnameValid && formSubmitted}
              errorMsg = {firstnameValid}
            />

            <Input
              placeholder="Apellido..."
              label="Apellido"
              name="lastname"
              type="text"
              value={formState.lastname}
              onChange={handleInputChange}
              error={lastnameValid && formSubmitted}
              errorMsg ={lastnameValid}
            />
          </div>

          <Input
            placeholder="Ingresa un correo..."
            label="Correo"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleInputChange}
            error={emailValid && formSubmitted}
            errorMsg= {emailValid}
          />

          <Input
            placeholder="Ingresa una contraseña..."
            label="Contraseña"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleInputChange}
            error={passwordValid && formSubmitted}
            errorMsg={passwordValid}
          />

          <Input
            label="Imagen"
            name="imgUser"
            type="file"
            onChange={handleFileChange}
          />

          <TermsButton
              check={formState.terms}
              onChange={handleCheckboxChange}
              error={termsValid && formSubmitted}
              errorMsg = {termsValid}
              handleModal={handleModal}
          />

          <Button
            backgroundColor="#c75200"
            buttonText="Siguiente"

          />
          <span className={styles.link}>
            Ya tienes cuenta? <Link to="/auth/login">Inicia Sesión</Link>
          </span>

          <ModalTerms
          isModalOpen={isModalOpen}
          handleModal={handleModal}
           />

        </form>
      </div>
      <div className={styles.backgroundDark}>

      </div>
    </div>
  )
}
