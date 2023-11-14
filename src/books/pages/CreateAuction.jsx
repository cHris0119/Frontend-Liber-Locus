import { useNavigate } from 'react-router-dom'
import { Input, InputComboBoxB } from '../components'
import styles from '../styles/CreateAuction.module.css'
import { useState } from 'react'
import { useForm } from '../../hooks'

const initialForm = {
  book: 'Seleccione',
  initalPrice: '',
  durationDays: ''
}

const formValidations = {
  book: [(value) => value !== 'Seleccione', 'Debes ingresar una categoria'],
  initalPrice: [(value) => value >= 1 && !isNaN(parseInt(value)), 'Debe ser un numero'],
  durationDays: [(value) => value >= 1 && value <= 5 && !isNaN(parseInt(value)), 'Debe ser un numero max 5.']
}

export const CreateAuction = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const navigate = useNavigate()

  const {
    handleInputChange,
    handleResetForm,
    formState,

    bookValid,
    durationDaysValid,
    initalPriceValid,
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
      // navigate('/subasta')
    }
  }
  return (
    <div className={styles.createDiscussionContainer}>

    <form
    className={styles.createDiscussionForm}
    onSubmit={handleSubmit}
    >

      <h1>Crear subasta</h1>

      <InputComboBoxB
      label='Libro a subastar'
      name='book'
      value={formState.book}
      onChange={handleInputChange}
      error={bookValid && formSubmitted}
      errorMsg={bookValid}
      />

        <Input
        placeholder={'1000, 2000...'}
        label={'Precio inicial'}
        type={'text'}
        name={'initalPrice'}
        value={formState.initalPrice}
        onChange={handleInputChange}
        error={initalPriceValid && formSubmitted}
        errorMsg = {initalPriceValid}
        />

          <Input
          placeholder={'1, 2, 3...'}
          label={'Duracion de dias'}
          type={'text'}
          name={'durationDays'}
          value={formState.durationDays}
          onChange={handleInputChange}
          error={durationDaysValid && formSubmitted}
          errorMsg = {durationDaysValid}
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
