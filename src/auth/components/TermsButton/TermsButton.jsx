import styles from './TermsButton.module.css'

export const TermsButton = ({
  onChange,
  check = false,
  error,
  errorMsg
}) => {
  console.log(error)
  return (
    <>
      <div className={styles.termsContainer}>
          <input
          type="checkbox"
          name='terms'
          checked={check}
          onChange={onChange}
          />
          <label>
              Aceptas
              <span className={styles.terms}> terminos </span>
              y condiciones?
          </label>
      </div>

      {error && <span className={styles.error}>{errorMsg}</span>}

    </>
  )
}
