import { DiscussionAnswer } from '../DiscussionAnswer/DiscussionAnswer'
import styles from './DiscussionListAnswer.module.css'

export const DiscussionListAnswer = () => {
  const answers = [1, 2, 3, 4]
  return (
    <div className={styles.listAnswerContainer}>
      {answers.map((answer) => (
        <DiscussionAnswer key={answer} />
      ))}
    </div>
  )
}
