import styles from './TextAreaForm.module.css'

export const TextAreaForm = ({
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

    <textarea
    name={name}
    placeholder={placeholder}
    id={name}
    onChange={onChange}
    value={value}
    className={styles.textarea}
    ></textarea>

  {error && <span className={styles.error}>{errorMsg}</span>}
</div>
  )
}
