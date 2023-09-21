import { useNavigate } from 'react-router-dom'
import { Input } from '../components/Input/Input'

import styles from '../styles/EditDirection.module.css'

export const EditDirection = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/editarPerfil')
  }
  return (
    <div className={styles.editAccountContainer}>

        <form
        className={styles.editAccountForm}
        onSubmit={handleSubmit}
        >
            <h1>Editar Dirección</h1>

            <Input
            label='Calle'
            type='text'
            value='callefalsa123'
            name='calle'
            />

            <Input
            label='Numero'
            type='text'
            value='1231'
            name='numero'
            />

            <Input
            label='Comuna'
            type='text'
            value='Renca'
            name='comuna'
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
