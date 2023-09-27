import styles from './InputComboBox.module.css'

export const InputComboBox = ({
  label,
  value,
  error,
  name
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
          className={styles.inputDirection}
        >
            <option value="Renca">Renca</option>
            <option value="Huechuraba">Huechuraba</option>
            <option value="Conchali">Conchali</option>
        </select>
        {error && <span>{error}</span>}
      </div>
  )
}
