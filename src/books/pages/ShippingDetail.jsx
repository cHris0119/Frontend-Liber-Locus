import { useParams } from 'react-router-dom'
import { SelectDirection, BackButton, SummaryProduct, Loader } from '../components/'

import styles from '../styles/ShippingDetail.module.css'
import { useBookStore } from '../../hooks'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import booksApi from '../../api/booksApi'

export const ShippingDetail = () => {
  const { postId } = useParams()
  const { user } = useSelector(state => state.auth)
  const { bookList } = useSelector(state => state.book)

  const selectedBook = bookList.find(book => book.id === Number(postId))

  const { startLoadingEvents } = useBookStore()
  const { isLoadingBooks } = useSelector(state => state.book)

  const [dataUrl, setDataUrl] = useState('')
  const [dataToken, setDataToken] = useState('')

  useEffect(() => {
    startLoadingEvents()
  }, [])

  if (isLoadingBooks === true) {
    return (
      <div style={{ height: '100vh' }}>
      <Loader />
      </div>
    )
  }

  const handlePay = async () => {
    try {
      const response = await booksApi.post('api/transbank/iniciar_pago', {
        monto: selectedBook.price,
        orden_compra: postId,
        user_id: user.id
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      setDataToken(response.data.token)
      setDataUrl(response.data.url)

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (

    <div className={styles.shippingDetailContainer}>
      <BackButton />

      <div className={styles.shippingDirectionContainer}>
        <SelectDirection />
        <div className={styles.continuarBtnContainer}>
          {/* <NavLink
          to={'/detalleEnvio/correct'}
          > */}
            <button
            onClick={handlePay}
            className={styles.continuarBtn}>
              Continuar
            </button>

            { dataUrl && dataToken
              ? (
              <form method="post" action={dataUrl}>
              <input type="hidden" name="token_ws" value={dataToken} />
              <input type="submit" value="Ir a pagar" />
              </form>
                )
              : <h2>No hay data aun</h2>
            }

          {/* </NavLink> */}

        </div>
      </div>

      <SummaryProduct selectedBook={selectedBook} />

    </div>
  )
}
