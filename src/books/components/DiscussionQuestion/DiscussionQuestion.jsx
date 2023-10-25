import styles from './DiscussionQuestion.module.css'

export const DiscussionQuestion = ({ discussion }) => {
  return (
    <div className={styles.questionContainer}>

            <div className={styles.postedBy}>
                postedBy: <span>{discussion.created_by}</span>
            </div>
            <div className={styles.question}>
                <h2>{discussion.title}</h2>
            </div>
            <div className={styles.questionDescription}>
                <p>{discussion.description}</p>
            </div>

    </div>
  )
}
