import { DiscussionCard } from '../DiscussionCard/DiscussionCard'
import styles from './DiscussionList.module.css'

export const DiscussionList = () => {
  const arr = [1, 2, 3, 4, 5]
  return (

    <div className={styles.discussionListContainer}>
        {arr.map((discussion) => (
            <DiscussionCard key={discussion} />
        ))}
    </div>

  )
}
