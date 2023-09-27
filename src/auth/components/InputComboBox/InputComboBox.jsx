import styles from './InputComboBox.module.css'

export const InputComboBox = ({
  label,
  value,
  error,
  errorMsg,
  name,
  onChange
}) => {
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
            <option value={1}>Renca</option>
            <option value={2}>Huechuraba</option>
            <option value={3}>Conchali</option>
        </select>
        {error && <span className={styles.error}>{errorMsg}</span>}
      </div>
  )
}
