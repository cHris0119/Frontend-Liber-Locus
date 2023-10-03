import { useEffect, useState } from 'react'
import { BackButton, Input, InputComboBox, TextAreaForm } from '../'

import { useBookStore, useForm } from '../../../hooks'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import styles from './PublishBookForm.module.css'

const initialForm = {
  nameBook: '',
  nameAuthor: '',
  price: '',
  description: '',
  genre: 'Seleccione'
}

const formValidations = {
  genre: [(value) => value !== 'Seleccione', 'Debes ingresar un genero'],
  nameBook: [(value) => value.length >= 1, 'Debe ser un nombre valido'],
  description: [(value) => value.length >= 1, 'Debe ser un nombre valido'],
  price: [(value) => value.length >= 1 && !isNaN(parseInt(value)), 'El numero es requerido'],
  nameAuthor: [(value) => value.length >= 1, 'Debe ser un nombre valido']
}

export const PublishBookForm = () => {
  const { startAddBook } = useBookStore()
  const { user } = useSelector(state => state.auth)
  const { message } = useSelector(state => state.book)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const navigate = useNavigate()

  const {
    handleInputChange,
    handleResetForm,
    formState,
    nameBook,
    price,
    genre,
    nameAuthor,
    description,

    nameBookValid,
    priceValid,
    nameAuthorValid,
    genreValid,
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
      //*
      await startAddBook({
        nameBook,
        price: parseFloat(price),
        description,
        nameAuthor,
        genre: parseInt(genre),
        uid: user.id
      })
      navigate('/marketplace')
    }
  }

  useEffect(() => {
    if (message !== undefined) {
      Swal.fire(message.payload, message, 'error')
    }
  }, [message])

  return (
    <div className={styles.publishBookFormContainer}>

      <BackButton />

      <form
      onSubmit={handleSubmit}
      className={styles.publishBookForm}>
        <h1>PUBLICAR LIBRO</h1>
        <div className={styles.publishBookFormFlex}>

          <Input
          placeholder={'Dracula, harry potter...'}
          label={'Nombre'}
          type={'text'}
          name={'nameBook'}
          value={formState.nameBook}
          onChange={handleInputChange}
          error={nameBookValid && formSubmitted}
          errorMsg = {nameBookValid}
          />

          <Input
          placeholder={'Bram Stoker, J.K Rowling...'}
          label={'Autor'}
          type={'text'}
          name={'nameAuthor'}
          value={formState.nameAuthor}
          onChange={handleInputChange}
          error={nameAuthorValid && formSubmitted}
          errorMsg = {nameAuthorValid}
          />

          <Input
          placeholder={'1000, 2000...'}
          label={'Precio'}
          type={'text'}
          name={'price'}
          value={formState.price}
          onChange={handleInputChange}
          error={priceValid && formSubmitted}
          errorMsg = {priceValid}
          />

          <InputComboBox
          label='Genero'
          name='genre'
          value={formState.genre}
          onChange={handleInputChange}
          error={genreValid && formSubmitted}
          errorMsg = {genreValid}

          />

          <TextAreaForm
          label='Descripcion'
          name='description'
          value={formState.description}
          onChange={handleInputChange}
          error={descriptionValid && formSubmitted}
          errorMsg = {descriptionValid}

          />
        </div>

        <div className={styles.publishBookButtonContainer}>
          <input className={styles.publishBookButton} type="submit" value='PUBLICAR' />
        </div>

      </form>

    </div>
  )
}
