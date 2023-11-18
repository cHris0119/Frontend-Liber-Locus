import styles from '../styles/NotificationPage.module.css'

export const NotificationPage = () => {
  const noti = [1, 2, 3]
  return (
    <div className={styles.container}>
        <h1>Notificaciones</h1>
        <hr />

        <div className={styles.listNotification}>
            {noti.map((notification, index) => (
                <>
                    <article
                    className={styles.notificationCard}
                    key={index}>

                        <h3>Marketplace</h3>
                        <p> - tu libro harry potter fue vendido</p>

                    </article>

                    <hr />

                    <article
                    className={styles.notificationCard}
                    key={index}>

                        <h3>Subasta</h3>
                        <p> - Has ganado la subasta del libro DRACULA, haz click <span className={styles.pagarAqui}>AQUÍ</span> para realizar el pago</p>

                    </article>

                    <hr />
                </>
            ))}
        </div>
    </div>
  )
}
