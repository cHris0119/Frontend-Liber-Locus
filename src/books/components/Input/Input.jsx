import styles from './Input.module.css'

export const Input = ({
  label,
  type,
  value,

  name
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
        id={name}
        value={value}
        className={styles.input}
        />

    </div>
  )
}
