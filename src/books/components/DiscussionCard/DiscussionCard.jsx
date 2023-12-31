import { Link } from 'react-router-dom'

import styles from './DiscussionCard.module.css'

export const DiscussionCard = ({ discussion }) => {
  return (
    <>
    <article className={styles.discussionCardContainer}>
        <Link to={`/DiscussionDetail/${discussion.id}`}>

        <p className='text-lg'>
            Subido por {discussion.created_by}
        </p>

        <h2 className='text-xl'>{discussion.title}</h2>

        <p className={styles.description}>
            - {discussion.description}
        </p>

        </Link>
    </article>

    </>
  )
}
