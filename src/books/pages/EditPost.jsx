import { useNavigate, useParams } from 'react-router-dom'
import { Input } from '../components/Input/Input'

import styles from '../styles/EditPost.module.css'
import { InputComboBox, TextAreaForm } from '../components'
import { useBookStore, useForm } from '../../hooks'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const formValidations = {
  nameBook: [(value) => value.length >= 1, 'El nombre es requerido.'],
  price: [(value) => value.length >= 1 && !isNaN(parseInt(value)), 'El numero es requerido'],
  genre: [(value) => value !== 'Seleccione', 'Debes ingresar un genero'],
  description: [(value) => value.length >= 1, 'La descripcion es requerida.'],
  nameAuthor: [(value) => value.length >= 1, 'Debe ser un nombre valido']
}

export const EditPost = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { bookList } = useSelector(state => state.book)
  const { startUpdateBook } = useBookStore()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const bookToEdit = bookList?.find(book => book.id === parseInt(id))

  const initialForm = {
    nameBook: bookToEdit.name,
    nameAuthor: bookToEdit.author,
    price: bookToEdit.price,
    description: bookToEdit.description,
    genre: bookToEdit.book_category
  }

  const {
    handleInputChange,
    handleResetForm,
    formState,
    nameBook,
    price,
    genre,
    description,
    nameAuthor,

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

      const book = {
        id: parseInt(id),
        name: nameBook,
        price,
        description,
        author: nameAuthor,
        book_img: 'aaa',
        book_category: genre,
        valoration: bookToEdit.valoration,
        seller: bookToEdit.seller,
        book_state: bookToEdit.book_state
      }
      await startUpdateBook(book)
      navigate('/perfil/misPost')
    }
  }

  return (

        <div className={styles.editAccountContainer}>
      <form className={styles.editAccountForm} onSubmit={handleSubmit}>
        <h1>Editar Publicación</h1>

        <Input
          placeholder={'Dracula, harry potter...'}
          label={'Nombre'}
          type={'text'}
          name='nameBook'
          value={formState.nameBook}
          onChange={handleInputChange}
          error={nameBookValid && formSubmitted}
          errorMsg={nameBookValid}
          />

        <Input
          placeholder={'Bram Stoker, J.K Rowling...'}
          label={'Autor'}
          type={'text'}
          name={'nameAuthor'}
          value={formState.nameAuthor}
          onChange={handleInputChange}
          error={nameAuthorValid && formSubmitted}
          errorMsg={nameAuthorValid}
          />

        <Input
          placeholder={'1000, 2000...'}
          label={'Precio'}
          type={'text'}
          name={'price'}
          value={formState.price}
          onChange={handleInputChange}
          error={priceValid && formSubmitted}
          errorMsg={priceValid}
          />

        <InputComboBox
          label='Genero'
          name='genre'
          value={formState.genre}
          onChange={handleInputChange}
          error={genreValid && formSubmitted}
          errorMsg={genreValid}
          />

        <TextAreaForm
          label='Descripcion'
          name='description'
          value={formState.description}
          onChange={handleInputChange}
          error={descriptionValid && formSubmitted}
          errorMsg={descriptionValid}
          />

        <button className={styles.saveChanges}>Guardar cambios</button>
      </form>
      </div>

  )
}
