import styles from './Input.module.css'

export const Input = ({
  label,
  type,
  value = '',
  placeholder,
  error,
  errorMsg,
  name,
  onChange
}) => {
  return (
    <div className={styles.inputContainer}>
      <label
      htmlFor={name}
      className={styles.labelAuth}
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={styles.inputAuth}
        onChange={onChange}
      />
      {error && <span className={styles.error}>{errorMsg}</span>}
    </div>
  )
}
