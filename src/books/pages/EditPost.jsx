import { useNavigate } from 'react-router-dom'
import { Input } from '../components/Input/Input'

import styles from '../styles/EditPost.module.css'

export const EditPost = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/perfil/misPost')
  }
  return (
    <div className={styles.editAccountContainer}>

    <form
    className={styles.editAccountForm}
    onSubmit={handleSubmit}
    >
        <h1>Editar Publicación</h1>

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
        label='Precio'
        type='number'
        value='5000'
        name='precio'
        />

        <Input
        label='Categoria'
        type='text'
        value='Terror'
        name='categoria'
        />

        <button
        className={styles.saveChanges}
        >
            Guardar cambios
        </button>
    </form>
</div>
  )
}
