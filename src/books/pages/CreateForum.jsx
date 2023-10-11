import { InputComboBox, Input } from '../components'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { useForm } from '../../hooks'

import styles from '../styles/CreateForum.module.css'

const initialForm = {
  img: '',
  name: '',
  category: ''
}

const formValidations = {
  name: [(value) => value.length >= 1, 'El nombre es requerido'],
  category: [(value) => value !== 'Seleccione', 'Debes ingresar una categoria']
}

export const CreateForum = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const navigate = useNavigate()

  const {
    handleInputChange,
    handleResetForm,
    handleFileChange,
    formState,

    nameValid,
    categoryValid,
    isFormValid

  } = useForm({
    initialForm,
    formValidations
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    if (isFormValid) {
      handleResetForm()
      setFormSubmitted(false)
      //*

      navigate('/foro/listaForos')
    }
  }

  return (
    <div className={styles.createDiscussionContainer}>

    <form
    className={styles.createDiscussionForm}
    onSubmit={handleSubmit}
    >
        <h1>Crear foro</h1>

        <Input
        label='Imagen'
        type='file'
        name='img'
        onChange={handleFileChange
        }

        />

        <Input
        label='Titulo'
        type='text'
        name='name'
        value={formState.name}
        onChange={handleInputChange}
        error={nameValid && formSubmitted}
        errorMsg = {nameValid}
        />

    <InputComboBox
      label='Categoria'
      name='category'
      value={formState.category}
      onChange={handleInputChange}
      error={categoryValid && formSubmitted}
      errorMsg={categoryValid}
      />

        <button
        className={styles.saveChanges}
        >
            Crear
        </button>
    </form>
</div>
  )
}
