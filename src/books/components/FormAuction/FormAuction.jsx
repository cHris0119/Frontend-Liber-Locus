import { useState } from 'react'
import styles from './FormAuction.module.css'
import { formatearPeso } from '../../../helpers'

export const FormAuction = ({ handlePuja, auctionD, finalPrice2 }) => {
  const [inputValue, setInputValue] = useState('')
  const [isNumber, setIsNumber] = useState(true)
  const finalPrice = parseInt(finalPrice2)

  const handleChange = (ev) => {
    const value = ev.target.value
    setInputValue(value)

    // Verificar si el valor es un número
    const isNumeric = !isNaN(value) && value !== '' && parseInt(value) > finalPrice
    setIsNumber(isNumeric)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()

    const isNumeric = !isNaN(inputValue) && inputValue !== '' && parseInt(inputValue) > finalPrice
    if (isNumeric) {
      handlePuja(inputValue)
      setInputValue('')
      setIsNumber(true)
    }
  }
  return (
    <form
    onSubmit={handleSubmit}
    className={styles.formAuction}>

            <div className={styles.inputContainer}>
                <input
                className={styles.inputText}
                placeholder={`Ej: ${formatearPeso(finalPrice + 1000)}`}
                type="text"
                value={inputValue}
                onChange={handleChange}
                 />

                {!isNumber && <span>Debe ser un número mayor a {formatearPeso(finalPrice)}.</span>}

            </div>

            <input
            className={styles.inputSubmit}
            type="submit"
            value={'Pujar'} />
        </form>
  )
}
