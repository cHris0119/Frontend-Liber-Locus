import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { ListChatMessages } from '../ListChatMessages/ListChatMessages'
import booksApi from '../../../api/booksApi'

import styles from './ChatContact.module.css'

export const ChatContact = () => {
  const { id } = useParams()
  const { user } = useSelector(state => state.auth)
  const [chatMessage, setChatMessage] = useState('')
  const [listChat, setListChat] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const chatContainerRef = useRef()

  const [chatSocket, setChatSocket] = useState(null)
  const token = JSON.parse(localStorage.getItem('token'))
  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }

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

      chatSocket.send(JSON.stringify(message))
    } else {
      console.error('WebSocket connection not open.')
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
      try {
        const dataServer = JSON.parse(msg.data)
        setListChat((prevListChat) => [...prevListChat, dataServer])

        scrollToBottom()
      } catch (error) {
        console.error('Error al procesar el mensaje WebSocket:', error)
      }
    }

    setChatSocket(socket)
  }, [])

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await booksApi.get(`api/chatroom/get_msg/${id}/`,
          config)
        setIsLoading(false)
        const { data } = response
        setListChat(data.message)

        scrollToBottom()
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }
    }
    getMessages()
  }, [])

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }

  return (
    <div className={styles.chatContainer}>

      <ListChatMessages
      listChat={listChat}
      isLoading={isLoading}
      chatContainerRef={chatContainerRef}
       />

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
