import { ChatMessage } from '../ChatMessage/ChatMessage'
import { Loader } from '../Loader/Loader'

import styles from './ListChatMessages.module.css'

export const ListChatMessages = ({ listChat, isLoading, chatContainerRef }) => {
  const hasMessages = listChat.length > 0
  return (
    <div className={styles.messagesContainer}>

        <header className={styles.header}>

            <p>Juan Lopez</p>

        </header>

        { isLoading
          ? <Loader />
          : (hasMessages
              ? (
        <div
        ref={chatContainerRef}
        className={styles.listMessages}>
            {listChat.map(message => (
                <ChatMessage
                key={message.id}
                message={message}
                 />
            ))}
        </div>

                )
              : null
            ) }

      </div>
  )
}
