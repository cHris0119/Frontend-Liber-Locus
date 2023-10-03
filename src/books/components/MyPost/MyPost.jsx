import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useBookStore } from '../../../hooks'
import { useEffect } from 'react'

import styles from './MyPost.module.css'
import { Loader } from '../Loader/Loader'

export const MyPost = () => {
  const { user } = useSelector(state => state.auth)
  const { bookList, isLoadingBooks } = useSelector(state => state.book)
  const { startLoadingEvents, startDeletingBook } = useBookStore()

  const myBooks = bookList.filter((book) => book.seller.id === user.id)
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
      ? (myBooks?.map((book) => (

        <article className={styles.myPost} key={book.id}>

          <div className={styles.articleImgContainer}>
            <img src="" alt="img-post" />
          </div>

          <div className={styles.articleContent}>
            <div className={styles.articleDetails}>
                <p>{book.name}</p>
                <p>{book.price} CLP</p>
                <p>Publicado hace: 2d</p>
            </div>
            <div className={styles.articleActions}>
              <button><Link to={`/editarPost/${book.id}`}>Editar</Link></button>
              <button onClick={() => handleDelete(book.id)}>Eliminar</button>
            </div>
          </div>

        </article>
        )))
      : (<h2 className={styles.noFound}>No tienes publicaciones</h2>)
    }
    </>
  )
}
