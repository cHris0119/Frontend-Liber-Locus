import { useParams } from 'react-router-dom'
import { QuestionForm, AnswerPost, Loader } from '../'

import { useEffect, useState } from 'react'
import booksApi from '../../../api/booksApi'

import styles from './QuestionsPost.module.css'

export const QuestionsPost = () => {
  const [answers, setAnswers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { postId } = useParams()
  console.log(postId)

  const token = JSON.parse(localStorage.getItem('token'))
  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }
  useEffect(() => {
    const getAnswers = async () => {
      try {
        const response = await booksApi.get(`api/questions/getBookQuestions/${postId}`,
          config)
        console.log(response)
        setIsLoading(false)
        setAnswers(response.data.Data)
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }
    }
    getAnswers()
  }, [])

  const hasAnswers = answers?.length > 0

  return (

    <div className={styles.questionsContainer}>
      <h2 style={{ color: '#fff' }}>Preguntas y respuestas</h2>

      <QuestionForm setAnswers={setAnswers} />

      {isLoading
        ? <Loader />
        : (hasAnswers
            ? <AnswerPost answers={answers} />
            : <h3>No se han hecho preguntas aun</h3>)
    }

    </div>

  )
}
