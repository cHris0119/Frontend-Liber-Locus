import { AiFillDelete } from 'react-icons/ai'
import { BackButton } from '../components'
import styles from '../styles/MembersForumPage.module.css'
import { useEffect, useState } from 'react'
import booksApi from '../../api/booksApi'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const MembersForumPage = () => {
  const [members, setMembers] = useState([])
  const { id } = useParams()
  const { user } = useSelector(state => state.auth)
  const token = JSON.parse(localStorage.getItem('token'))
  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }
  useEffect(() => {
    const getMembers = async () => {
      try {
        const response = await booksApi.get(`api/forums/get_users_one_forum/${id}/`,
          config)
        const { data } = response
        setMembers(data.ForumUsersData)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    getMembers()
  }, [])

  const handleDelete = async (e) => {
    e.preventDefault()
    // const confirmacion = confirm('Estas seguro que deseas eliminar al usario?')
    // if (confirmacion) {
    //   const response = await booksApi.get(`api/forums/get_users_one_forum/${id}/`,
    //     config)
    // }
  }

  return (
    <div className={styles.editAccountContainer}>
    <BackButton />

    <form
    className={styles.editAccountForm}

    >
        <h1>Miembros del foro</h1>

        <div className={styles.listMembersContainer}>
          { members.length > 0
            ? (members.map((member) => member.id !== user.id
                ? (

            <article
              key={member.id}
              className={styles.userContainer}
            >
            <div className={styles.left}>

              <div className={styles.imgContainer}>
                <img src="//styles.redditmedia.com/t5_2rer8/styles/communityIcon_pv6qe0p0bera1.png?width=256&s=7f7b9b4fdaabad7139aa9a359bb2a22ac473b849" alt="imgUser" />
              </div>
              <div>
                <h2 className={styles.userName}>
                  {`${member.first_name} ${member.last_name}`}
                  </h2>
              </div>

            </div>

            <div className={styles.right}>
              <button onClick={handleDelete}>
                <AiFillDelete />
              </button>
            </div>

          </article>
                  )
                : null)
              )
            : <h3>No se encuentran miembros</h3> }

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
