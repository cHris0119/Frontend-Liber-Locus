import { Link } from 'react-router-dom'

import styles from './ReviewCard.module.css'
import { StarRatingWithoutChange } from '../StarRating/StarRating'

export const ReviewCard = () => {
  return (

    <Link to='/detalleReseña/1'>
      <article className={styles.reviewCardContainer}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <img src="https://images.cdn3.buscalibre.com/fit-in/360x360/6f/b4/6fb45c30bd70046fc578acd09cda2c42.jpg" alt="bookImg" />
            </div>
        </div>

        <div className={styles.right}>
            <h2>Dracula <span>· hace 4d</span></h2>
            <p className={styles.user}>User1
              <span>
              <StarRatingWithoutChange numStar={4} />
              </span>
            </p>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cum commodi, est consectetur, soluta alias quibusdam quae molestias autem eos esse iste perspiciatis temporibus in quisquam similique, numquam veniam quas.
              </p>

            <span className={styles.likes}>❤️ 10.000 Likes</span>
        </div>

      </article>
    </Link>

  )
}
