import styles from './Input.module.css'

export const Input = ({
  label,
  type,
  value,
  placeholder,
  name,
  onChange,
  error,
  errorMsg
}) => {
  return (
    <div className={styles.inputContainer}>

        <label
        htmlFor={name}
        className={styles.label}
        >
        {label}
        </label>

        <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        onChange={onChange}
        value={value}
        className={styles.input}
        />
      {error && <span className={styles.error}>{errorMsg}</span>}
    </div>
  )
}
