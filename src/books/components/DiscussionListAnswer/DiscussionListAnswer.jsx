import { DiscussionAnswer } from '../DiscussionAnswer/DiscussionAnswer'

import styles from './DiscussionListAnswer.module.css'

export const DiscussionListAnswer = ({ isLoading, answers }) => {
  return (
    <div className={styles.listAnswerContainer}>
      {isLoading
        ? <h3>Cargando...</h3>
        : (

            answers.map((answer) => (
          <DiscussionAnswer
          answer={answer}
          key={answer.id} />
            ))

          )}
    </div>
  )
}
