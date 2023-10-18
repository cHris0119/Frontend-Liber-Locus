import { AiFillSetting } from 'react-icons/ai'

import styles from './ForumMainHeader.module.css'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import booksApi from '../../../api/booksApi'
import { useSelector } from 'react-redux'

export const ForumMainHeader = ({ forum }) => {
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

  const inForum = members.find(member => member.id === user.id)
  return (
    <header className={styles.header}>

    <div className={styles.containerImg}>
      <img src="https://espacio.fundaciontelefonica.com/wp-content/uploads/2019/04/portada-tema-librerias-1100x550.jpg" alt="forumPortada" />
    </div>

    <div className={styles.forumDetails}>

        <div className={styles.forumDetailsTitle}>

          <div className={styles.leftHeader}>
            <h1>{forum.name}</h1>
            <button className={styles.forumDetailsButton}>
                { inForum ? 'Salirse' : 'Unirse' }
            </button>
          </div>

              <Link to={`/editarForo/${forum.id}`}>
            <button className={styles.configButton}>
              <AiFillSetting />
              Configuración
            </button>
              </Link>

        </div>

        <p><span>{ members.length }</span> miembro(s)</p>

    </div>

  </header>
  )
}
