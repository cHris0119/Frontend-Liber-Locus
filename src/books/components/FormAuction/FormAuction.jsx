import { useState } from 'react'
import { formatearPeso } from '../../../helpers'

import styles from './FormAuction.module.css'

export const FormAuction = ({
  handlePuja,
  auctionD,
  finalPrice2,
  socketAuction
}) => {
  const [inputValue, setInputValue] = useState('')
  const [isNumber, setIsNumber] = useState(true)
  const finalPrice = parseInt(finalPrice2)
  const realFinalPrice = finalPrice
    ? parseInt(finalPrice)
    : auctionD.initial_price

  const ejPrice = formatearPeso(parseInt(realFinalPrice) + 1000)

  const handleChange = (ev) => {
    const value = ev.target.value
    setInputValue(value)

    // Verificar si el valor es un número
    const isNumeric = !isNaN(value) && value !== '' && parseInt(value) > realFinalPrice
    setIsNumber(isNumeric)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()

    const isNumeric = !isNaN(inputValue) && inputValue !== '' && parseInt(inputValue) > realFinalPrice
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
                placeholder={`Ej: ${ejPrice} CLP`}
                type="text"
                value={inputValue}
                onChange={handleChange}
                 />

                {!isNumber && <span>Debe ser un número mayor a {finalPrice
                  ? formatearPeso(parseInt(finalPrice + 1000))
                  : formatearPeso(parseInt(auctionD.initial_price + 1000))}.</span>}

            </div>

            <input
            className={socketAuction && socketAuction.readyState === WebSocket.OPEN ? styles.inputSubmit : styles.inputDisabled}
            disabled = {!(socketAuction && socketAuction.readyState === WebSocket.OPEN)}
            type="submit"
            value={'Pujar'} />
        </form>
  )
}
