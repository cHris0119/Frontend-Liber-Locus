import { useEffect, useState } from 'react'
import { ChatContact, BackButton, Loader } from '../components/'

import styles from '../styles/contactar.module.css'
import booksApi from '../../api/booksApi'
import { useParams } from 'react-router'

export const ContactarVendedor = () => {
  const { id } = useParams()
  const [dataBook, setDataBook] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const token = JSON.parse(localStorage.getItem('token'))
  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }
  useEffect(() => {
    const getDataBook = async () => {
      try {
        const response = await booksApi.get(`api/chatroom/book_data/${id}`,
          config)
        setIsLoading(false)
        console.log(response)
        // setDataBook(response.data.Data)
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    getDataBook()
  }, [])

  console.log(dataBook)
  return (
    <div className={styles.container}>

        <BackButton />

        <ChatContact />

        {isLoading
          ? <Loader />
          : <div className={styles.detailsContainer}>
            <h2>Detalles</h2>
            <hr />
            <div className={styles.details}>
                <ul>
                    <li>Harry potter</li>
                    <li>5000 CLP</li>
                    <li>Juan Lopez</li>
                    <li>En revision</li>
                </ul>

            </div>
        </div>
        }
    </div>
  )
}
