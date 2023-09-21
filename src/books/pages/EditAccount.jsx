import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../components/Input/Input'

import styles from '../styles/EditAccount.module.css'

export const EditAccount = () => {
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
            <h1>Editar Cuenta</h1>

            <Input
            label='Nombre'
            type='text'
            value='chris'
            name='nombre'
            />

            <Input
            label='Apellido'
            type='text'
            value='hola'
            name='apellido'
            />

            <Input
            label='Email'
            type='email'
            value='chris@gmail.com'
            name='email'
            />

            <Input
            label='Contraseña'
            type='password'
            value='chris'
            name='password'
            />

            <div className={styles.editOthers}>

                <span className={styles.link}>
                    <Link to='/editarDireccion'>
                        Editar dirección
                    </Link>
                </span>

                <span className={styles.link}>
                    <Link>
                        Editar Metodo de pago
                    </Link>
                </span>

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
