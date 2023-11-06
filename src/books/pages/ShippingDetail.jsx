import { useParams, NavLink } from 'react-router-dom'
import { SelectDirection, BackButton, SummaryProduct, Loader } from '../components/'

import styles from '../styles/ShippingDetail.module.css'
import { useBookStore } from '../../hooks'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export const ShippingDetail = () => {
  const { postId } = useParams()

  const { startLoadingEvents } = useBookStore()
  const { isLoadingBooks } = useSelector(state => state.book)

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

  return (

    <div className={styles.shippingDetailContainer}>
      <BackButton />

      <div className={styles.shippingDirectionContainer}>
        <SelectDirection />
        <div className={styles.continuarBtnContainer}>
          <NavLink
          // to={`/seleccionPago/${postId}`}
          >
            <button className={styles.continuarBtn}>
              Continuar
            </button>
          </NavLink>

        </div>
      </div>

      <SummaryProduct bookId={postId} />

    </div>
  )
}
