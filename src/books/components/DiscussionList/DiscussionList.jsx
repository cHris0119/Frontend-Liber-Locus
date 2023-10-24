import { useEffect, useState } from 'react'
import { DiscussionCard } from '../DiscussionCard/DiscussionCard'
import styles from './DiscussionList.module.css'
import { useParams } from 'react-router-dom'
import booksApi from '../../../api/booksApi'

export const DiscussionList = () => {
  const [discussion, setDiscussion] = useState([])
  const { id } = useParams()
  const token = JSON.parse(localStorage.getItem('token'))
  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }
  useEffect(() => {
    const getMembers = async () => {
      try {
        const response = await booksApi.get(`api/forums/get_forum_discussions/${id}/`,
          config)
        const { data } = response
        setDiscussion(data.ForumDiscussionsData)
      } catch (error) {
        console.log(error)
      }
    }
    getMembers()
  }, [])

  const hasDiscussion = discussion.length > 0

  console.log(discussion)

  return (

    <div className={styles.discussionListContainer}>
      { hasDiscussion
        ? (
            discussion?.map((discussion) => (
            <DiscussionCard
            key={discussion.id}
            discussion={discussion}
             />
            ))
          )
        : <h3>No se encuentra discusiones</h3>}
    </div>

  )
}
