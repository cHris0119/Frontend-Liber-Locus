import styles from './DiscussionAnswer.module.css'

export const DiscussionAnswer = () => {
  return (
    <article className={styles.answerContainer}>

        <div className={styles.userContainer}>
            <div className={styles.imgContainer}>
                <img src="https://styles.redditmedia.com/t5_37p00h/styles/profileIcon_snoo94ed844e-8ad4-47ae-8120-0a5b8537a812-headshot.png?width=256&height=256&crop=256:256,smart&s=7cc79a76a2679242f0a8c59577517c1b5d341877" alt="userImg" />
            </div>
            <p><span>User 1</span> · hace 2h.</p>
        </div>

        <div className={styles.userAnswer}>
            <p>Te recomiendo leer harry potter. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique in quos architecto adipisci, facilis mollitia ab atque officiis necessitatibus officia quam aliquid quo ea molestias eos sapiente iure est quibusdam?</p>
        </div>

    </article>
  )
}
