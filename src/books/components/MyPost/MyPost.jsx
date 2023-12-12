import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useBookStore } from '../../../hooks'
import { useEffect } from 'react'

import { Loader } from '../Loader/Loader'

import styles from './MyPost.module.css'

export const MyPost = () => {
  const { user } = useSelector(state => state.auth)
  const { bookList, isLoadingBooks } = useSelector(state => state.book)
  const { startLoadingEvents, startDeletingBook } = useBookStore()
  console.log(bookList)

  const availableBooks = bookList.filter(book => book.book_state.id === 2)

  const myBooks = availableBooks.filter((book) => book.seller.id === user.id)

  const hasPost = myBooks.length > 0

  const handleDelete = (id) => {
    const confirmacion = confirm('Estas seguro que quieres eliminar este libro?')
    if (confirmacion) {
      console.log('Eliminado')
      startDeletingBook(id)
    } else {
      console.log('cancelado')
    }
  }

  useEffect(() => {
    startLoadingEvents()
  }, [])

  if (isLoadingBooks === true) {
    return (
      <div style={{ height: '100%' }}>
      <Loader />
      </div>
    )
  }

  return (
    <>
    {hasPost
      ? (myBooks?.map((book) => {
          return (

        <article className={styles.myPost} key={book.id}>

          <div className={styles.articleImgContainer}>
            <img
            src={book.book_img ? `data:image/${book.format};base64,${book.book_img}` : '/public/not-found.jpg'}
            alt="img-post" />
          </div>

          <div className={styles.articleContent}>
            <div className={styles.articleDetails}>
                <p>{book.name}</p>
                <p>{book.price} CLP</p>
                {/* <p>Publicado hace: {dias < 1 ? '' : ` ${dias} días`} {horas < 1 ? 'Menos de una hora' : ` ${horas} horas`}</p> */}
            </div>
            <div className={styles.articleActions}>
              <button><Link to={`/editarPost/${book.id}`}>Editar</Link></button>
              <button onClick={() => handleDelete(book.id)}>Eliminar</button>
            </div>
          </div>

        </article>
          )
        }))
      : (<h2 className={styles.noFound}>No tienes publicaciones</h2>)
    }
    </>
  )
}
