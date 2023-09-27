import styles from './Button.module.css'

export const Button = ({
  buttonText,
  backgroundColor,
  textColor,
  disa
}) => {
  return (
    <button
      disabled={disa}
      style={{ background: backgroundColor, color: textColor }}
      className={styles.button}
      type="submit"
    >
      {buttonText}
    </button>
  )
}
