import { AiFillSetting } from 'react-icons/ai'

import styles from './ForumMainHeader.module.css'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import booksApi from '../../../api/booksApi'
import { useSelector } from 'react-redux'

export const ForumMainHeader = ({
  forum,
  inForum,
  members,
  setMembers
}) => {
  const { id } = useParams()
  const token = JSON.parse(localStorage.getItem('token'))
  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }
  const { user } = useSelector(state => state.auth)
  const isAdmin = user.id === forum.user
  console.log(forum)

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

  const handleJoin = async () => {
    try {
      await booksApi.post(`api/join_forum/${id}/`, {}, {
        headers: {
          Authorization: `Token ${token}`
        }
      }
      )
      getMembers()
    } catch (error) {
      console.log(error)
    }
  }

  const handleLeave = async () => {
    try {
      await booksApi.delete(`api/forums/leave_forum/${id}/`, {
        headers: {
          Authorization: `Token ${token}`
        }
      }
      )
      getMembers()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMembers()
  }, [])

  return (
    <header className={styles.header}>

    <div className={styles.containerImg}>
      <img src="https://espacio.fundaciontelefonica.com/wp-content/uploads/2019/04/portada-tema-librerias-1100x550.jpg" alt="forumPortada" />
    </div>

    <div className={styles.forumDetails}>

        <div className={styles.forumDetailsTitle}>

          <div className={styles.leftHeader}>
            <h1>{forum.name}</h1>

            <button
            onClick={inForum ? handleLeave : handleJoin}
            className={styles.forumDetailsButton}
            >
                { inForum ? 'Salirse' : 'Unirse' }
            </button>

          </div>

          {
            isAdmin
              ? (
              <Link to={`/editarForo/${forum.id}`}>
            <button className={styles.configButton}>
              <AiFillSetting />
              Configuración
            </button>
              </Link>
                )
              : null
              }

        </div>

        <p><span>{ members.length }</span> miembro(s)</p>

    </div>

  </header>
  )
}
