import { useNavigate } from 'react-router-dom'
import { Input } from '../components/Input/Input'

import styles from '../styles/EditReview.module.css'

export const EditReview = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/perfil/misReseñas')
  }
  return (
    <div className={styles.editAccountContainer}>

    <form
    className={styles.editAccountForm}
    onSubmit={handleSubmit}
    >
        <h1>Editar Reseña</h1>

        <Input
        label='Imagen'
        type='file'
        name='image'
        />

        <Input
        label='Nombre'
        type='text'
        value='Dracula'
        name='nombre'
        />

        <Input
        label='Valoración 0-10'
        type='number'
        value='3'
        name='valoracion'
        />

        <div className={styles.textareaContainer}>
            <label htmlFor="descripcion">Descripción</label>
            <textarea
            name="descripcion"
            id="descripcion"
            value='Muy buen libro, recomendado'
            ></textarea>
        </div>

        <button
        className={styles.saveChanges}
        >
            Guardar cambios
        </button>
    </form>
</div>
  )
}
