import { Link, useParams } from 'react-router-dom'

import styles from './MyDiscussion.module.css'
import { useEffect, useState } from 'react'
import booksApi from '../../../api/booksApi'
import { useSelector } from 'react-redux'

export const MyDiscussion = () => {
  const [myDiscussion, setMyDiscussion] = useState([])
  const { user } = useSelector(state => state.auth)
  const { id } = useParams()
  const token = JSON.parse(localStorage.getItem('token'))
  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }
  const hasDiscussion = myDiscussion.length > 0

  useEffect(() => {
    const getMembers = async () => {
      try {
        const response = await booksApi.get(`api/user_forum_discussions/${user.id}/${id}/`,
          config)
        const { data } = response
        console.log(data)
        setMyDiscussion(data.UserForumDiscussionsData)
      } catch (error) {
        console.log(error)
      }
    }
    getMembers()
  }, [])

  const handleDelete = async (id) => {
    const confirmar = confirm('Estas seguro de eliminar esta discusion?')
    if (!confirmar) return
    try {
      const response = await booksApi.delete(`api/discussions/delete/${id}/`,
        config)
      const newData = myDiscussion.filter((discussion) => discussion.id !== id)
      setMyDiscussion(newData)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    {hasDiscussion
      ? (myDiscussion.map((discussion) => (
        <article
        key={discussion.id}
        className={styles.discussionCardContainer}>
                <Link>

                <div className={styles.headerCard}>
                    <p className={styles.postedBy}>
                    </p>

                    <div className={styles.actions}>
                        <button
                        onClick={() => handleDelete(discussion.id)}
                        >Eliminar</button>
                    </div>

                </div>

                <h2 className={styles.title}>{discussion.title}</h2>

                <p className={styles.description}>
                    {discussion.description}
                </p>

                </Link>
            </article>

        )))
      : <h3>No hay discusiones</h3>
}

</>
  )
}
