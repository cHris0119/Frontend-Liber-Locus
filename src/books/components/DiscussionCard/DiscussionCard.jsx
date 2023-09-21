import { Link } from 'react-router-dom'

import styles from './DiscussionCard.module.css'

export const DiscussionCard = () => {
  return (
    <>
    <article className={styles.discussionCardContainer}>
        <Link>

        <p className={styles.postedBy}>
            <span><Link>Foro1</Link></span> Subido por usuario1
        </p>

        <h2 className={styles.title}>Titulo discusion</h2>

        <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, quis aut incidunt optio neque maxime repudiandae minima, perferendis voluptatem aliquid, quidem similique magni? Nostrum aliquam architecto optio
        </p>

        </Link>
    </article>

    </>
  )
}
