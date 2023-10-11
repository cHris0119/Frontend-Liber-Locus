import { useNavigate } from 'react-router-dom'
import { Input } from '../components/Input/Input'

import { StarRating } from '../components/StarRating/StarRating'
import { useForm, useReviewStore } from '../../hooks'
import { useState } from 'react'
import { TextAreaForm } from '../components'

import styles from '../styles/CreateReview.module.css'

const initialForm = {
  img: '',
  title: '',
  valoration: 0,
  description: ''
}

const formValidations = {
  title: [(value) => value.length >= 1, 'Debe ser un titulo valido'],
  valoration: [(value) => value.length >= 1 && !isNaN(parseInt(value)), 'El numero es requerido'],
  description: [(value) => value.length >= 1, 'Debe ser una descripcion valida']
}

export const CreateReview = () => {
  const navigate = useNavigate()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { startAddReview } = useReviewStore()

  const {
    handleInputChange,
    handleResetForm,
    handleFileChange,
    formState,

    titleValid,
    valorationValid,
    descriptionValid,
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

      await startAddReview(formState)
      navigate('/reseñas/populares')
    }
  }

  return (
    <div className={styles.createDiscussionContainer}>

    <form
    className={styles.createDiscussionForm}
    onSubmit={handleSubmit}
    >
        <h1>Crear reseña</h1>

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
        name='title'
        value={formState.title}
        onChange={handleInputChange}
        error={titleValid && formSubmitted}
        errorMsg = {titleValid}
        />

        <StarRating
         value={formState.valoration}
         onChange={handleInputChange}
         error={valorationValid && formSubmitted}
         errorMsg = {valorationValid}
        />

        <TextAreaForm
        label='Descripcion'
        name='description'
        value={formState.description}
        onChange={handleInputChange}
        error={descriptionValid && formSubmitted}
        errorMsg = {descriptionValid}

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
