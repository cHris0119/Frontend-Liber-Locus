import { useEffect, useState } from 'react'
import { BackButton, DiscussionForm, DiscussionListAnswer, DiscussionQuestion } from '../components/'

import styles from '../styles/DiscussionDetail.module.css'
import { useParams } from 'react-router-dom'
import booksApi from '../../api/booksApi'

export const DiscussionDetail = () => {
  const { id } = useParams()
  const [discussion, setDiscussion] = useState([])
  const [answers, setAnswers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const token = JSON.parse(localStorage.getItem('token'))
  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [discussionResponse, answersResponse] = await Promise.all([
          booksApi.get(`api/discussions/${id}/`, config),
          booksApi.get(`api/discussions/${id}/comments/`, config)
        ])

        const discussionData = discussionResponse.data
        const answersData = answersResponse.data.Comments

        setDiscussion(discussionData)
        setAnswers(answersData)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }
    }

    fetchData()
  }, [])

  const hasAnswers = answers > 0

  console.log(discussion)

  return (
    <div className={styles.discussionDetailContainer}>
        <BackButton />
        { isLoading
          ? <h3>Cargando...</h3>
          : <>

          <DiscussionQuestion
          discussion={discussion}
          />

        <DiscussionForm
        setAnswers={setAnswers}
         />

        <DiscussionListAnswer
        isLoading={isLoading}
        answers={answers}
        hasAnswers={hasAnswers}
         />

          </>
}

    </div>
  )
}
