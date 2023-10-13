import { AiFillDelete } from 'react-icons/ai'
import { BackButton } from '../components'
import styles from '../styles/MembersForumPage.module.css'

export const MembersForumPage = () => {
  const handleDelete = (e) => {
    e.preventDefault()
    confirm('Estas seguro que deseas eliminar al usario?')
  }
  return (
    <div className={styles.editAccountContainer}>
    <BackButton />

    <form
    className={styles.editAccountForm}

    >
        <h1>Miembros del foro</h1>

        <div className={styles.listMembersContainer}>
        <article className={styles.userContainer}>
            <div className={styles.left}>

              <div className={styles.imgContainer}>
                <img src="//styles.redditmedia.com/t5_2rer8/styles/communityIcon_pv6qe0p0bera1.png?width=256&s=7f7b9b4fdaabad7139aa9a359bb2a22ac473b849" alt="imgUser" />
              </div>
              <div>
                <h2 className={styles.userName}>Nombre usuario</h2>
              </div>

            </div>

            <div className={styles.right}>
              <button onClick={handleDelete}>
                <AiFillDelete />
              </button>
            </div>

          </article>

          <article className={styles.userContainer}>
            <div className={styles.left}>

              <div className={styles.imgContainer}>
                <img src="//styles.redditmedia.com/t5_2rer8/styles/communityIcon_pv6qe0p0bera1.png?width=256&s=7f7b9b4fdaabad7139aa9a359bb2a22ac473b849" alt="imgUser" />
              </div>
              <div>
                <h2 className={styles.userName}>Nombre usuario</h2>
              </div>

            </div>

            <div className={styles.right}>
              <button onClick={handleDelete}>
                <AiFillDelete />
              </button>
            </div>

          </article>
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
