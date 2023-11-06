import { Link, useParams } from 'react-router-dom'

import { useEffect, useState } from 'react'
import booksApi from '../../../api/booksApi'
import { Loader } from '../'

import styles from './MyDiscussion.module.css'

export const MyDiscussion = () => {
  const [myDiscussion, setMyDiscussion] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()
  const token = JSON.parse(localStorage.getItem('token'))
  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }
  const hasDiscussion = myDiscussion.length > 0

  console.log(myDiscussion)

  useEffect(() => {
    const getMembers = async () => {
      try {
        const response = await booksApi.get(`api/get_user_forum_discussions/${id}/`,
          config)
        setIsLoading(false)
        const { data } = response
        setMyDiscussion(data.UserForumDiscussionsData)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
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
    <div className={styles.discussionListContainer}>
    { isLoading
      ? <Loader />
      : (

          hasDiscussion
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
        ) }

</div>
  )
}
