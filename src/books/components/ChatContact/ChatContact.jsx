import { useEffect, useState } from 'react'
import { ListChatMessages } from '../ListChatMessages/ListChatMessages'

import { useParams } from 'react-router-dom'
import styles from './ChatContact.module.css'
import { useSelector } from 'react-redux'

export const ChatContact = () => {
  const { id } = useParams()
  const { user } = useSelector(state => state.auth)
  const [chatMessage, setChatMessage] = useState('')
  const [chatSocket, setChatSocket] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (chatSocket && chatSocket.readyState === WebSocket.OPEN) {
      const { chat } = Object.fromEntries(new FormData(e.target))
      setChatMessage('')

      const message = {
        type: 'chat_message',
        message: chat,
        username: user.id,
        chat_room: id,
        timestamp: Date.now()
      }

      console.log(message)

      chatSocket.send(JSON.stringify(message))
    } else {
      console.error('WebSocket connection not open.')
      // Puedes implementar lógica adicional, como intentar reconectar o mostrar un mensaje de error.
    }
  }

  const handleChatMessageChange = (e) => {
    setChatMessage(e.target.value)
  }

  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:8000/ws/chat/${id}/`)

    socket.onopen = (msg) => {
      console.log(msg)
      console.log('ws conectado')
    }
    socket.onclose = () => {
      console.log('ws desconectado')
    }
    socket.onmessage = (msg) => {
      const dataServer = JSON.parse(msg.data)
      console.log(dataServer)
    }

    setChatSocket(socket)
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
        className={chatSocket && chatSocket.readyState === WebSocket.OPEN ? styles.inputSubmit : styles.inputDisabled}
        disabled = {!(chatSocket && chatSocket.readyState === WebSocket.OPEN)}
        type="submit" />

      </form>

    </div>
  )
}
