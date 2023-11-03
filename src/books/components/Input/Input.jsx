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
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={styles.input}
        onChange={onChange}
        />
      {error && <span className={styles.error}>{errorMsg}</span>}
    </div>
  )
}
