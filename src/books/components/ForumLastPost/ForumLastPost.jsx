import { useEffect, useState } from 'react'
import { DiscussionCard } from '../DiscussionCard/DiscussionCard'
import booksApi from '../../../api/booksApi'
import { Loader } from '../Loader/Loader'

import styles from './ForumLastPost.module.css'
import { useSelector } from 'react-redux'

export const ForumLastPost = () => {
  const { user } = useSelector(state => state.auth)
  const [discussion, setDiscussion] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const token = JSON.parse(localStorage.getItem('token'))
  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }
  useEffect(() => {
    const getLastPost = async () => {
      try {
        const response = await booksApi.get(`api/latest_discussions/${user.id}/`,
          config)
        setIsLoading(false)
        console.log(response)
        const { data } = response
        setDiscussion(data.LatestDiscussions)
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }
    }
    getLastPost()
  }, [])

  const hasDiscussion = discussion.length > 0

  return (

    <div className={styles.discussionListContainer}>
      { isLoading
        ? <Loader />
        : (hasDiscussion
            ? (
                discussion?.map((discussion) => (
              <DiscussionCard
              key={discussion.id}
              discussion={discussion}
              />
                ))
              )
            : <h3>No se encuentra discusiones</h3>
          ) }
    </div>

  )
}
