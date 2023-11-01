import styles from './AnswerPost.module.css'

import { FormAnswer } from '../FormAnswer/FormAnswer'
import booksApi from '../../../api/booksApi'
import { useSelector } from 'react-redux'

const RenderQuestions = ({ answers, isSeller, setAnswers }) => {
  const { user } = useSelector(state => state.auth)
  const token = JSON.parse(localStorage.getItem('token'))
  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }
  const handleDelete = async (id) => {
    const confirmacion = confirm('Estas seguro de querer eliminar tu pregunta?')
    if (confirmacion) {
      try {
        await booksApi.delete(`api/questions/delete/${id}/`,
          config)

        setAnswers(prevAnswers => {
          return prevAnswers.filter(currentAnswer => currentAnswer.id !== id)
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    answers.map((question) => (
      <div className={styles.lastAnswer} key={question.id}>
        <p className={styles.lastAnswerQuestion}>

        {question.description}
        {question.user_id === user.id
          ? (
            <button
            onClick={() => handleDelete(question.id)}
            className={styles.deleteQuestion}>Eliminar
            </button>
            )
          : null}

        </p>

        {question.answer__description
          ? <div className={styles.lastAnswerContainer}>
              <p className={styles.lastAnswerP}>- {question.answer__description}</p>
            </div>

          : isSeller
            ? <FormAnswer setAnswers={setAnswers} questionID={question.id} />
            : null}

      </div>
    ))
  )
}

export const AnswerPost = ({ answers, isSeller, setAnswers }) => {
  return (
    <div className={styles.answerContainer}>
      <h3 style={{ color: '#000' }} >Ultimas respuestas</h3>
      <RenderQuestions
      answers={answers}
      setAnswers={setAnswers}
      isSeller={isSeller} />
    </div>
  )
}
