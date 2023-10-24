import { useNavigate, useParams } from 'react-router-dom'

import styles from './CreateDiscussion.module.css'

export const CreateDiscussion = () => {
  const navigate = useNavigate()
  const { id } = useParams()

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
      src="https://styles.redditmedia.com/t5_2rer8/styles/communityIcon_pv6qe0p0bera1.png?width=256&s=7f7b9b4fdaabad7139aa9a359bb2a22ac473b849"
      alt="userImg"
      className={styles.userImg} />
    </div>

    <input
    type="submit"
    value="Crear discusión" />

  </form>

  )
}
