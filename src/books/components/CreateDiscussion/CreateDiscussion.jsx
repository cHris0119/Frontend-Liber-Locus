import { useNavigate, useParams } from 'react-router-dom'

import styles from './CreateDiscussion.module.css'
import { useSelector } from 'react-redux'

export const CreateDiscussion = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { user } = useSelector(state => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/crearDiscusion/${id}`)
  }

  return (

    <form
    onSubmit={handleSubmit}
    className={styles.formForumMain}
    >

    <div className={styles.userImgContainer}>
      <img
      src={user.userPhoto ? `data:image/${user.format};base64,${user.userPhoto}` : '/public/not-found.jpg'}
      alt="userImg"
      className={styles.userImg} />
    </div>

    <input
    type="submit"
    value="Crear discusión" />

  </form>

  )
}
