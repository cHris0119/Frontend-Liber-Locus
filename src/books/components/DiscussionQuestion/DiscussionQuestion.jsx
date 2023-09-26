import styles from './DiscussionQuestion.module.css'

export const DiscussionQuestion = () => {
  return (
    <div className={styles.questionContainer}>

            <div className={styles.postedBy}>
                postedBy: <span>User1</span> hace 1h.
            </div>
            <div className={styles.question}>
                <h2>Pregunta. Que libro me recomiendan?</h2>
            </div>
            <div className={styles.questionDescription}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta praesentium fugiat, dolore illum eos placeat. Odio corrupti sint natus, ipsum assumenda, porro laborum quidem harum nulla odit minus quasi quo?</p>
            </div>

    </div>
  )
}
