import { useEffect, useState } from 'react'
import booksApi from '../../../api/booksApi'
import styles from './InputComboBox.module.css'

export const InputComboBox = ({
  label,
  value,
  error,
  errorMsg,
  name,
  onChange
}) => {
  const [comunas, setComunas] = useState([])

  useEffect(() => {
    const getComunas = async () => {
      try {
        const comunas = await booksApi.get('api/communeGet')
        const data = comunas.data
        setComunas(data)
      } catch (error) {
        console.log(error)
      }
    }
    getComunas()
  }, [])
  return (
      <div className={styles.DirectionContainer}>
        <label
        htmlFor={name}
        className={styles.labelDirection}
        >
          {label}
        </label>
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={styles.inputDirection}
        >
            <option value={null}>Seleccione</option>
            { comunas.map((comuna) => (
            <option key={comuna.id} value={comuna.id}>{comuna.nombre}</option>
            )) }

        </select>
        {error && <span className={styles.error}>{errorMsg}</span>}
      </div>
  )
}
