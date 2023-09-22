import { useNavigate } from 'react-router-dom'
import { Input } from '../components/Input/Input'

import styles from '../styles/CreateDiscussion.module.css'

export const EditDiscussionPage = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/foro/foro1/misDiscusiones')
  }

  return (
    <div className={styles.createDiscussionContainer}>

    <form
    className={styles.createDiscussionForm}
    onSubmit={handleSubmit}
    >
        <h1>Editar discusión</h1>

        <Input
        label='Titulo'
        type='text'
        value='Titulo 1'
        name='titulo'
        />

        <div className={styles.textareaContainer}>

          <label htmlFor="descripcion">
            Descripción
          </label>

          <textarea value='Lorem asdasdasd'>
          </textarea>

        </div>

        <button
        className={styles.saveChanges}
        >
            Editar
        </button>
    </form>
</div>
  )
}
