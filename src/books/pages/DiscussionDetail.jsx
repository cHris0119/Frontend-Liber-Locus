import { BackButton, DiscussionForm, DiscussionListAnswer, DiscussionQuestion } from '../components/'

import styles from '../styles/DiscussionDetail.module.css'

export const DiscussionDetail = () => {
  return (
    <div className={styles.discussionDetailContainer}>
        <BackButton />

        <DiscussionQuestion />

        <DiscussionForm />

        <DiscussionListAnswer />

    </div>
  )
}
