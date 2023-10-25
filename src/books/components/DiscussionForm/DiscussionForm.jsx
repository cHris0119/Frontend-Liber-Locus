import { useParams } from 'react-router-dom'
import { TextAreaForm } from '../TextAreaForm/TextAreaForm'
import { useState } from 'react'
import { useForm } from '../../../hooks'
import booksApi from '../../../api/booksApi'

import styles from './DiscussionForm.module.css'

const initialForm = {
  description: ''
}

const formValidations = {
  description: [(value) => value.length >= 1, 'Debe ser una descripcion valida']
}

export const DiscussionForm = ({ setAnswers }) => {
  const { id } = useParams()
  const [formSubmitted, setFormSubmitted] = useState(false)
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
      try {
        const { data } = await booksApi.post(`api/discussion/${id}/add_comment/`, {
          content: formState.description
        },
        config)
        setAnswers((answers) => [...answers, data.comment])
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <div className={styles.formContainer}>
      <form
      onSubmit={handleSubmit}
      className={styles.form}>

        <TextAreaForm
        label='Descripcion'
        name='description'
        value={formState.description}
        onChange={handleInputChange}
        error={descriptionValid && formSubmitted}
        errorMsg = {descriptionValid}

          />
        <input
        type="submit"
        className={styles.inputSubmit}
        value='Comentar'
         />
      </form>
    </div>
  )
}
