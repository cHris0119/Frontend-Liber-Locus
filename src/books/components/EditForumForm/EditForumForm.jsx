import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm, useForumStore } from '../../../hooks'
import { Input, InputComboBoxF } from '../'

import styles from './EditForumForm.module.css'

const formValidations = {
  name: [(value) => value.length >= 1, 'Debe ser un nombre valido'],
  category: [(value) => value !== 'Seleccione', 'Debes ingresar una categoria']

}

export const EditForumForm = ({ forumList }) => {
  const navigate = useNavigate()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { startDeletingForum } = useForumStore()
  const { id } = useParams()
  const ForumToEdit = forumList?.find(forum => forum.id === parseInt(id))
  const { startEditingForum } = useForumStore()

  const initialForm = {
    name: ForumToEdit.name,
    img: ForumToEdit.forum_img,
    category: ForumToEdit.forum_category
  }

  const {
    handleInputChange,

    formState,

    nameValid,
    imgValid,
    categoryValid,
    isFormValid

  } = useForm({
    initialForm,
    formValidations
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    if (isFormValid) {
      setFormSubmitted(false)

      await startEditingForum(formState, id)

      navigate(`/foro/${id}`)
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault()
    const confirmacion = confirm('Estas seguro que deseas eliminar el foro?')
    if (confirmacion) {
      startDeletingForum(parseInt(id))
      navigate('/foro/listaForos')
    }
  }
  return (
    <form
    className={styles.editAccountForm}
    onSubmit={handleSubmit}
    >
        <h1>Editar Foro</h1>

        <Input
        label='Imagen'
        type='text'
        value={formState.img}
        name='img'
        onChange={handleInputChange}
        error={imgValid && formSubmitted}
        errorMsg = {imgValid}
        />

        <Input
        label='Nombre'
        type='text'
        value={formState.name}
        name='name'
        onChange={handleInputChange}
        error={nameValid && formSubmitted}
        errorMsg = {nameValid}
        />

      <InputComboBoxF
      label='Categoria'
      name='category'
      value={formState.category}
      onChange={handleInputChange}
      error={categoryValid && formSubmitted}
      errorMsg={categoryValid}
      />

        <div className={styles.editOthers}>

            <span className={styles.link}>
                <Link to={`/miembros/${id}`}>
                    Miembros del foro
                </Link>
            </span>

        </div>

        <div className={styles.buttons}>

        <button
        className={styles.deleteForum}
        onClick={handleDelete}
        >
            Eliminar Foro
        </button>

        <button
        className={styles.saveChanges}
        >
            Guardar cambios
        </button>
        </div>

    </form>
  )
}
