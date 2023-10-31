import { useSelector } from 'react-redux'
import styles from './AnswerPost.module.css'
import { useParams } from 'react-router-dom'
import { useBookStore } from '../../../hooks'
import { useEffect } from 'react'
import { Loader } from '../Loader/Loader'
import { FormAnswer } from '../FormAnswer/FormAnswer'

const RenderQuestions = ({ answers }) => {
  const { user } = useSelector(state => state.auth)
  const { bookList } = useSelector(state => state.book)
  const { postId } = useParams()
  const { startLoadingEvents } = useBookStore()
  const { isLoadingBooks } = useSelector(state => state.book)

  const selectedBook = bookList.find(book => book.id === Number(postId))
  const isSeller = selectedBook.seller.id === user.id

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

  return (
    answers.map((question) => (
      <div className={styles.lastAnswer} key={question.id}>
        <p className={styles.lastAnswerQuestion}>{question.description}</p>

        {question.answer__description
          ? <div className={styles.lastAnswerContainer}>
              <p className={styles.lastAnswerP}>- {question.answer__description}</p>
            </div>

          : isSeller
            ? <FormAnswer questionID={question.id} />
            : null}

      </div>
    ))
  )
}

export const AnswerPost = ({ answers }) => {
  return (
    <div className={styles.answerContainer}>
      <h3 style={{ color: '#000' }} >Ultimas respuestas</h3>
      <RenderQuestions answers={answers} />
    </div>
  )
}
