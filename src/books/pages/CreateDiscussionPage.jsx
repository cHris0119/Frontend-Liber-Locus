import { useNavigate, useParams } from 'react-router-dom'
import { Input } from '../components/Input/Input'

import styles from '../styles/CreateDiscussion.module.css'
import { useForm } from '../../hooks'
import { useState } from 'react'
import { TextAreaForm } from '../components'

import booksApi from '../../api/booksApi'

const initialForm = {

  title: '',

  description: ''
}

const formValidations = {
  title: [(value) => value.length >= 1, 'Debe ser un titulo valido'],
  description: [(value) => value.length >= 1, 'Debe ser una descripcion valida']
}

export const CreateDiscussionPage = () => {
  const navigate = useNavigate()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { id } = useParams()
  const token = JSON.parse(localStorage.getItem('token'))
  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }

  const {
    handleInputChange,
    handleResetForm,
    formState,

    titleValid,
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
      console.log(formState)
      try {
        const response = await booksApi.post('api/create_discussion/', {
          forum_id: id,
          title: formState.title,
          description: formState.description
        },
        config)
        console.log(response)
      } catch (error) {
        console.log(error)
      }

      navigate(`/foro/${id}/ultimasDiscusiones`)
    }
  }

  return (
    <div className={styles.createDiscussionContainer}>

    <form
    className={styles.createDiscussionForm}
    onSubmit={handleSubmit}
    >
        <h1>Crear discusión</h1>

        <Input
        label='Titulo'
        type='text'
        name='title'
        value={formState.title}
        onChange={handleInputChange}
        error={titleValid && formSubmitted}
        errorMsg = {titleValid}
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
