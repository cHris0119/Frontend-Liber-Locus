import { useEffect, useState } from 'react'
import { DiscussionCard } from '../DiscussionCard/DiscussionCard'
import { useParams } from 'react-router-dom'
import booksApi from '../../../api/booksApi'
import { Loader } from '../Loader/Loader'
import { getEnvVariables } from '../../../helpers'

import styles from './DiscussionList.module.css'

export const DiscussionList = () => {
  const [discussion, setDiscussion] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()
  const { VITE_API_URL } = getEnvVariables()

  const token = JSON.parse(localStorage.getItem('token'))
  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }
  useEffect(() => {
    const getMembers = async () => {
      try {
        const response = await booksApi.get(`${VITE_API_URL}api/forums/get_forum_discussions/${id}/`,
          config)
        setIsLoading(false)
        const { data } = response
        setDiscussion(data.ForumDiscussionsData)
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }
    }
    getMembers()
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
            : <h3 className='text-xl text-white text-center'>No se encuentra discusiones</h3>
          ) }
    </div>

  )
}
