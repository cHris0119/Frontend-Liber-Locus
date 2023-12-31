import styles from './TermsButton.module.css'

export const TermsButton = ({
  onChange,
  check = false,
  error,
  errorMsg,
  handleModal
}) => {
  return (
    <>
      <div className={styles.termsContainer}>
        <div className={styles.inputContainer}>

          <input
          type="checkbox"
          name='terms'
          checked={check}
          onChange={onChange}
          />
          <label>
              Aceptas
              <span
              onClick={handleModal}
              className={styles.terms}> terminos </span>
              y condiciones?
          </label>
        </div>
      {error && <span className={styles.error}>{errorMsg}</span>}

      </div>

    </>
  )
}
