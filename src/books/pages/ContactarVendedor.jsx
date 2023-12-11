import { useEffect, useState } from 'react'
import { ChatContact, BackButton, Loader } from '../components/'

import styles from '../styles/contactar.module.css'
import booksApi from '../../api/booksApi'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

export const ContactarVendedor = () => {
  const { user } = useSelector(state => state.auth)
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
        setDataBook(response.data.books)
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

  const amISeller = user.id === dataBook?.seller?.id
  console.log(amISeller)
  const fullNameBuyer = `${dataBook?.buyer?.first_name} ${dataBook?.buyer?.last_name}`
  const fullNameSeller = `${dataBook?.seller?.first_name} ${dataBook?.seller?.last_name}`
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
                    <li>{dataBook.book.name}</li>
                    <li>{dataBook.book.price} CLP</li>
                    <li>{amISeller ? fullNameBuyer : fullNameSeller}</li>
                </ul>

            </div>
        </div>
        }
    </div>
  )
}
