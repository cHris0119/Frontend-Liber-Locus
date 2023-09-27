import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

import styles from './StarRating.module.css'

export const StarRating = ({ numStar = 0 }) => {
  const [rating, setRating] = useState(numStar)
  const [hover, setHover] = useState(null)

  return (
    <div className={styles.ratingContainer}>
        <label>Valoración</label>

        <div>

        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1
          return (
                <label
                key={index}
                >

                    <FaStar
                    className={styles.star}
                    size={50}
                    color={currentRating <= (hover || rating) ? '#ffc107' : 'e4e5e9'}
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                    />
                    <input
                    className={styles.radio}
                    type="radio"
                    name='valoration'
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                    />
                </label>
          )
        })}
        </div>
        <p>{ rating ?? 0 } / 5</p>
    </div>
  )
}

export const StarRatingWithoutChange = ({ numStar = 0, size = 30 }) => {
  const [rating] = useState(numStar)
  const [hover] = useState(null)

  return (
    <div className={styles.ratingContainer}>
        <label>Valoración</label>

        <div>

        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1
          return (
                <label
                key={index}
                >

                    <FaStar
                    className={styles.star}
                    size={size}
                    color={currentRating <= (hover || rating) ? '#ffc107' : 'e4e5e9'}
                    />
                    <input
                    className={styles.radio}
                    type="radio"
                    name='valoration'
                    value={currentRating}

                    />
                </label>
          )
        })}
        </div>
        <p>{ rating ?? 0 } / 5</p>
    </div>
  )
}
