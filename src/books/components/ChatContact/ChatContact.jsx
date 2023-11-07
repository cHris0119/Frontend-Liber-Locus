import { useState } from 'react'
import { ListChatMessages } from '../ListChatMessages/ListChatMessages'

import styles from './ChatContact.module.css'

export const ChatContact = () => {
  const [chatMessage, setChatMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const { chat } = Object.fromEntries(
      new FormData(e.target)
    )

    console.log(chat)
    setChatMessage('')
  }

  const handleChatMessageChange = (e) => {
    setChatMessage(e.target.value)
  }

  return (
    <div className={styles.chatContainer}>

      <ListChatMessages />

      <form
      onSubmit={handleSubmit}
      className={styles.sendMessage}>

        <input
        placeholder='Pregunta al vendedor'
        name='chat'
        value={chatMessage}
        onChange={handleChatMessageChange}
        className={styles.inputText}
        type="text" />

        <input
        className={styles.inputSubmit}
        type="submit" />

      </form>

    </div>
  )
}
