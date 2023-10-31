import styles from './AnswerPost.module.css'

const RenderQuestions = ({ answers }) => {
  console.log(answers)
  return (
    answers.map((question) => (
      <div className={styles.lastAnswer} key={question.id}>
        <p className={styles.lastAnswerQuestion}>{question.description}</p>
        {question.answer__description
          ? <div className={styles.lastAnswerContainer}>
            <p className={styles.lastAnswerP}>{question.answer__description} ·</p>
          </div>

          : <form className={styles.formAnswer}>
            <input type="text" placeholder='...' />
            <input type="submit" value='Responder' />
          </form>}

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
