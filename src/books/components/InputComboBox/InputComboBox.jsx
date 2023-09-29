import styles from './InputComboBox.module.css'

export const InputComboBox = ({
  label,
  value,
  error,
  errorMsg,
  name,
  onChange
}) => {
  // const [comunas, setComunas] = useState([])

  // useEffect(() => {
  //   const getComunas = async () => {
  //     try {
  //       const comunas = await booksApi.get('api/communeGet')
  //       const data = comunas.data
  //       setComunas(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getComunas()
  // }, [])

  return (
      <div className={styles.genreContainer}>
        <label
        htmlFor={name}
        className={styles.labelgenre}
        >
          {label}
        </label>
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={styles.inputgenre}
        >
            <option value={null}>Seleccione</option>
            <option value={1}>Terror</option>
            <option value={2}>Romance</option>

        </select>
        {error && <span className={styles.error}>{errorMsg}</span>}
      </div>
  )
}
