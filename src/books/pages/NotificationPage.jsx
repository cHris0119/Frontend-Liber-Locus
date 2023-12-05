import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNotiStore } from '../../hooks'
import { Loader } from '../components'

import styles from '../styles/NotificationPage.module.css'

export const NotificationPage = () => {
  const { notificationList, isLoadingNoti } = useSelector(state => state.notification)
  const { startLoadingNoti } = useNotiStore()

  console.log(notificationList)

  useEffect(() => {
    startLoadingNoti()
  }, [])

  if (isLoadingNoti === true) {
    return (
      <div style={{ height: '100vh' }}>
      <Loader />
      </div>
    )
  }
  return (
    <div className={styles.container}>
        <h1>Notificaciones</h1>
        <hr />

        <div className={styles.listNotification}>
            {notificationList.map((noti) => (
              <>
                <article
                className={styles.notificationCard}
                key={noti.id}>

                    <h3> - {noti.message}</h3>

                </article>
                <hr />
              </>

            ))}
        </div>
    </div>
  )
}
