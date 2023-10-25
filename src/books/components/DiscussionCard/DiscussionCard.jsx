import { Link } from 'react-router-dom'

import styles from './DiscussionCard.module.css'

export const DiscussionCard = ({ discussion }) => {
  console.log(discussion)
  return (
    <>
    <article className={styles.discussionCardContainer}>
        <Link to={`/DiscussionDetail/${discussion.id}`}>

        <p className={styles.postedBy}>
            Subido por {discussion.created_by}
        </p>

        <h2 className={styles.title}>{discussion.title}</h2>

        <p className={styles.description}>
            {discussion.description}
        </p>

        </Link>
    </article>

    </>
  )
}
