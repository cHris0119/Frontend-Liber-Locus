import { useNavigate, useParams } from 'react-router-dom'
import { Input } from '../Input/Input'
import { TextAreaForm } from '../TextAreaForm/TextAreaForm'

import styles from './EditReviewForm.module.css'
import { useState } from 'react'
import { useForm, useReviewStore } from '../../../hooks'
import { StarRating } from '../StarRating/StarRating'

const formValidations = {
  title: [(value) => value.length >= 1, 'El titulo es requerido.'],
  //   image: [(value) => value.length >= 1 && !isNaN(parseInt(value)), 'El numero es requerido'],
  description: [(value) => value.length >= 1, 'La descripcion es requerida.']
}

export const EditReviewForm = ({ reviews }) => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { id } = useParams()
  const reviewToEdit = reviews?.find(review => review.id === parseInt(id))
  const { startUpdateReview } = useReviewStore()
  const navigate = useNavigate()

  const initialForm = {
    title: reviewToEdit.title,
    image: null,
    valoration: reviewToEdit.valoration,
    description: reviewToEdit.description
  }

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

    if (isFormValid) {
      handleResetForm()
      console.log('asdasd')
      setFormSubmitted(false)
      //*
      await startUpdateReview({ ...formState, id })

      navigate('/perfil/misReseñas')
    }
  }
  return (
    <form
    className={styles.editAccountForm}
    onSubmit={handleSubmit}
    >
        <h1>Editar Reseña</h1>

        <Input
        label='Imagen'
        type='file'
        name='image'
        onChange={handleFileChange}
        />

        <Input
        label='Titulo'
        type='text'
        name='title'
        value={formState.title}
        onChange={handleInputChange}
        error={titleValid && formSubmitted}
        errorMsg={titleValid}
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
        errorMsg={descriptionValid}
        />

        <button
        type='submit'
        className={styles.saveChanges}
        >
            Guardar cambios
        </button>
    </form>
  )
}
