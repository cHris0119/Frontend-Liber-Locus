import { useEffect, useState } from 'react'
import { ListChatMessages } from '../ListChatMessages/ListChatMessages'

import styles from './ChatContact.module.css'
import { useSelector } from 'react-redux'

export const ChatContact = () => {
  const { user } = useSelector(state => state.auth)
  const [chatMessage, setChatMessage] = useState('')

  const chatSocket = new WebSocket('ws://localhost:8000/ws/chat/(?P<chatroom_id>\d+)/$')

  const handleSubmit = (e) => {
    e.preventDefault()

    const { chatMsg } = Object.fromEntries(
      new FormData(e.target)
    )
    setChatMessage('')
    const message = {
      type: 'chat.message',
      message: chatMsg,
      username: user.email,
      timestamp: Date.now()
    }

    chatSocket.send(JSON.stringify(message))
  }

  const handleChatMessageChange = (e) => {
    setChatMessage(e.target.value)
  }

  useEffect(() => {
    chatSocket.onopen = () => {
      console.log('ws conectado')
    }
    chatSocket.onclose = () => {
      console.log('ws desconectado')
    }
    chatSocket.onmessage = (msg) => {
      const dataServer = JSON.parse(msg.data)
      console.log(dataServer)
    }
  }, [])

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
