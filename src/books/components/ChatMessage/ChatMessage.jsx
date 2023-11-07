import styles from './ChatMessage.module.css'

export const ChatMessage = ({ message }) => {
  return (
    <div
    className={`${styles.container} ${message.seller ? styles.seller : ''}`}>
        <p className={styles.content}>{message.content}</p>
    </div>
  )
}
