import booksApi from '../../../api/booksApi'
import styles from './FormAnswer.module.css'

export const FormAnswer = ({ questionID, setAnswers }) => {
  const token = JSON.parse(localStorage.getItem('token'))
  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { respuesta } = Object.fromEntries(
      new FormData(e.target)
    )
    try {
      const response = await booksApi.post(`api/answer/create/${questionID}/`, {
        description: respuesta
      },
      config)

      setAnswers(prevAnswers => {
        const copyAnswers = [...prevAnswers]

        const newAnswers = copyAnswers.map(answer => {
          if (answer.id === questionID) {
            return {
              ...answer,
              answer__description: respuesta
            }
          }
          return answer
        })

        return newAnswers
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form
    onSubmit={handleSubmit}
    className={styles.formAnswer}>
    <input
    name='respuesta'
    type="text"
    placeholder='...' />

    <input type="submit" value='Responder' />
  </form>
  )
}
