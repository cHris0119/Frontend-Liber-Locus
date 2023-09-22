import { useNavigate } from 'react-router-dom'
import { Input } from '../components/Input/Input'

import styles from '../styles/CreateDiscussion.module.css'

export const CreateDiscussionPage = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/foro/foro1')
  }

  return (
    <div className={styles.createDiscussionContainer}>

    <form
    className={styles.createDiscussionForm}
    onSubmit={handleSubmit}
    >
        <h1>Crear discusión</h1>

        <Input
        label='Titulo'
        type='text'
        value=''
        name='titulo'
        />

        <div className={styles.textareaContainer}>

          <label htmlFor="descripcion">
            Descripción
          </label>

          <textarea>
          </textarea>

        </div>

        <button
        className={styles.saveChanges}
        >
            Crear
        </button>
    </form>
</div>
  )
}
