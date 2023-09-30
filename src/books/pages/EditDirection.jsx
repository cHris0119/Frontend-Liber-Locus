import { useNavigate } from 'react-router-dom'
import { Input } from '../components/Input/Input'

import { InputComboBox } from '../../auth/components'
import { useState } from 'react'
import { useAuthStore, useForm } from '../../hooks'

import styles from '../styles/EditDirection.module.css'
import { useSelector } from 'react-redux'

const formValidations = {
  comuna: [(value) => value !== 'Seleccione', 'Debes ingresar una comuna'],
  calle: [(value) => value.length >= 1, 'La calle es requerida'],
  numero: [(value) => !isNaN(parseInt(value)), 'El numero2 es requerido'],
  nameDir: [(value) => value.length >= 1, 'El nombre es requerido']

}

export const EditDirection = () => {
  const navigate = useNavigate()
  const { startEditDirection } = useAuthStore()
  const { user } = useSelector(state => state.auth)
  const { direction } = user
  const [formSubmitted, setFormSubmitted] = useState(false)

  const initialForm = {
    comuna: direction.commune,
    calle: direction.calle,
    numero: direction.numero,
    nameDir: direction.nombre
  }

  const {
    handleInputChange,
    handleResetForm,
    formState,

    comunaValid,
    calleValid,
    numeroValid,
    nameDirValid,
    isFormValid

  } = useForm({
    initialForm,
    formValidations
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormSubmitted(true)

    if (isFormValid) {
      const { comuna, calle, numero, nameDir } = formState
      const { id } = user
      handleResetForm()
      setFormSubmitted(false)

      await startEditDirection({
        id,
        id_com: parseInt(comuna),
        calle,
        numero: parseInt(numero),
        nombre: nameDir
      })
      navigate('/editarPerfil')
    }
  }

  return (

    <div className={styles.editAccountContainer}>

  <form
        className={styles.editAccountForm}
        onSubmit={handleSubmit}
        >
            <h1>Editar Dirección</h1>

            <Input
              placeholder="Casa, trabajo..."
              label="Nombre"
              name="nameDir"
              type="text"
              value={formState.nameDir}
              onChange={handleInputChange}
              error={nameDirValid && formSubmitted}
              errorMsg = {nameDirValid}
            />

          <InputComboBox
          label='Comuna'
          name='comuna'
          value={formState.comuna}
          onChange={handleInputChange}
          error={comunaValid && formSubmitted}
          errorMsg = {comunaValid}
          />
        <div className={styles.twoInputs}>
          <Input
            placeholder="Calle..."
            label="Calle"
            name="calle"
            type="text"
            value={formState.calle}
            onChange={handleInputChange}
            error={calleValid && formSubmitted}
            errorMsg = {calleValid}
          />

          <Input
            placeholder="Número..."
            label="Numero"
            name="numero"
            type="text"
            value={formState.numero}
            onChange={handleInputChange}
            error={numeroValid && formSubmitted}
            errorMsg ={numeroValid}
          />
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
