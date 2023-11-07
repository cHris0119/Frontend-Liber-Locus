import { useState } from 'react'

import styles from './QuestionForm.module.css'
import booksApi from '../../../api/booksApi'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const QuestionForm = ({ setAnswers }) => {
  const { postId } = useParams()
  const { user } = useSelector(state => state.auth)
  const [question, setQuestion] = useState('')
  const token = JSON.parse(localStorage.getItem('token'))
  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }

  const handleChange = ({ target }) => {
    const question = target.value
    setQuestion(question)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await booksApi.post(`api/question/create/${postId}/`, {
        description: question
      },
      config)
      const { data } = response
      const newAnswer = { ...data.Question, answer__description: null, user_id: user.id }
      console.log(newAnswer)
      setAnswers(answers => [...answers, newAnswer])
      setQuestion('')
    } catch (error) {
      setQuestion('')
      console.log(error)
    }
  }
  return (

    <div className={styles.questionFormContainer}>

      <h3 style={{ color: '#000' }}>Pregunta al vendedor</h3>

      <form
      onSubmit={handleSubmit}
      className={styles.questionForm}>

        <input
        onChange={handleChange}
        value={question}
        className={styles.questionFormInput}
        type="text"
        placeholder='Escribe tu pregunta' />

        <input className={styles.questionFormInput} type="submit" name="" id="" value='Preguntar' />
      </form>

    </div>
  )
}
