import { Chat } from '../../mocks/chatMock.json'
import { ChatMessage } from '../ChatMessage/ChatMessage'

import styles from './ListChatMessages.module.css'

export const ListChatMessages = () => {
  return (
    <div className={styles.messagesContainer}>

        <header className={styles.header}>

            <div className={styles.containerImg}>
                <img src="" alt="imgSeller" />
            </div>
            <p>Juan Lopez</p>

        </header>

        <div className={styles.listMessages}>
            {Chat.map(message => (
                <ChatMessage
                key={message.id}
                message={message}
                 />
            ))}
        </div>

      </div>
  )
}
