import { useState } from 'react'
import styles from './FormAuction.module.css'

export const FormAuction = () => {
  const [inputValue, setInputValue] = useState('')
  const [isNumber, setIsNumber] = useState(true)

  const handleChange = (ev) => {
    const value = ev.target.value
    setInputValue(value)

    // Verificar si el valor es un número
    const isNumeric = !isNaN(value) && value !== ''
    setIsNumber(isNumeric)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()

    const isNumeric = !isNaN(inputValue) && inputValue !== ''
    if (isNumeric) {
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
                placeholder='Ej: 15.000'
                type="text"
                value={inputValue}
                onChange={handleChange}
                 />

                {!isNumber && <span>Debe ser un número.</span>}

            </div>

            <input
            className={styles.inputSubmit}
            type="submit"
            value={'Pujar'} />
        </form>
  )
}
