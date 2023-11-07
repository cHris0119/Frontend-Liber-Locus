import { ChatContact, BackButton } from '../components/'

import styles from '../styles/contactar.module.css'

export const ContactarVendedor = () => {
  return (
    <div className={styles.container}>

        <BackButton />

        <ChatContact />

        <div className={styles.detailsContainer}>
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
    </div>
  )
}
