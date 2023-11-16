import { useSelector } from 'react-redux'
import styles from './ChatMessage.module.css'

export const ChatMessage = ({ message }) => {
  const { user } = useSelector(state => state.auth)

  return (
    <div
    className={`${styles.container} ${user.id !== message.user_id ? styles.seller : ''}`}>
        <p className={styles.content}>{message.message}</p>
    </div>
  )
}
