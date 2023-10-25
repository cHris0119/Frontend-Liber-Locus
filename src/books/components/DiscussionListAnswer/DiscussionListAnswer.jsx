import { DiscussionAnswer } from '../DiscussionAnswer/DiscussionAnswer'

import styles from './DiscussionListAnswer.module.css'

export const DiscussionListAnswer = ({ isLoading, answers, hasAnswers }) => {
  return (
    <div className={styles.listAnswerContainer}>
      {isLoading
        ? <h3>Cargando...</h3>
        : hasAnswers
          ? (
              answers?.map((answer) => (
              <DiscussionAnswer
              answer={answer}
              key={answer.id} />
              ))
            )
          : <h3>No se encuentran respuestas</h3>
      }
    </div>
  )
}
