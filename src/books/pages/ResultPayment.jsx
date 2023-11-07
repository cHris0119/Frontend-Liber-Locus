import { Link } from 'react-router-dom'
import { MdOutlineMoodBad } from 'react-icons/md'
import { GrStatusGood } from 'react-icons/gr'

import styles from '../styles/resultPaymentPage.module.css'

export const ResultIncorrect = () => {
  return (
    <div className={styles.container}>

        <MdOutlineMoodBad className={styles.iconBad}/>

        <h1 className={styles.title}> ¡Pago Fracasado! </h1>
        <button className={styles.button}>
            <Link to={'/'}>Volver al marketplace</Link>
        </button>

    </div>
  )
}

export const ResultCorrect = () => {
  return (
    <div className={styles.container}>

    <GrStatusGood className={styles.iconGood}/>

    <h1 className={styles.title}> ¡Pago Aceptado! </h1>
    <button className={styles.button}>
        <Link to={'/'}>Volver al marketplace</Link>
    </button>

</div>
  )
}
