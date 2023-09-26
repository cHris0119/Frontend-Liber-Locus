import styles from './DiscussionForm.module.css'

export const DiscussionForm = () => {
  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <textarea placeholder='Que opinas?'></textarea>
        <input
        type="submit"
        className={styles.inputSubmit}
        value='Comentar'
         />
      </form>
    </div>
  )
}
