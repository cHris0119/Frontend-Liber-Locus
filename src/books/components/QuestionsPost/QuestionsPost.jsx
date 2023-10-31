import { useParams } from 'react-router-dom'
import { QuestionForm, AnswerPost, Loader } from '../'

import { useEffect, useState } from 'react'
import booksApi from '../../../api/booksApi'

import styles from './QuestionsPost.module.css'
import { useSelector } from 'react-redux'
import { useBookStore } from '../../../hooks'

export const QuestionsPost = () => {
  const [answers, setAnswers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { postId } = useParams()
  const { user } = useSelector(state => state.auth)
  const { bookList } = useSelector(state => state.book)
  const { startLoadingEvents } = useBookStore()
  const { isLoadingBooks } = useSelector(state => state.book)
  const selectedBook = bookList.find(book => book.id === Number(postId))
  const isSeller = selectedBook.seller.id === user.id

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

  useEffect(() => {
    startLoadingEvents()
  }, [])

  if (isLoadingBooks === true) {
    return (
      <div style={{ height: '100vh' }}>
      <Loader />
      </div>
    )
  }

  console.log(isSeller)

  return (

    <div className={styles.questionsContainer}>
      <h2 style={{ color: '#fff' }}>Preguntas y respuestas</h2>

      {isSeller
        ? null
        : <QuestionForm setAnswers={setAnswers} />}

      {isLoading
        ? <Loader />
        : (hasAnswers
            ? <AnswerPost answers={answers} isSeller={isSeller} setAnswers={setAnswers} />
            : <h3>No se han hecho preguntas aun</h3>)
    }

    </div>

  )
}
