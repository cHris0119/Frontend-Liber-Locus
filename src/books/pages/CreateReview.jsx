import { useNavigate } from 'react-router-dom'
import { Input } from '../components/Input/Input'

import styles from '../styles/CreateReview.module.css'
import { StarRating } from '../components/StarRating/StarRating'

export const CreateReview = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/reseñas/populares')
  }

  return (
    <div className={styles.createDiscussionContainer}>

    <form
    className={styles.createDiscussionForm}
    onSubmit={handleSubmit}
    >
        <h1>Crear reseña</h1>

        <Input
        label='Imagen'
        type='file'
        value=''
        name='imagen'
        />

        <Input
        label='Titulo'
        type='text'
        value=''
        name='titulo'
        />

        <StarRating />

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
