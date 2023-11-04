import { useSelector } from 'react-redux'
import { NavBar } from '..'
import { linksModal } from '../../services/linksArray'

import styles from './AccountButton.module.css'

export const AccountButton = ({ NavOpen, modalOpen, handleModal }) => {
  const { user } = useSelector(state => state.auth)
  return (

    <div
    onClick={() => handleModal()}
    className={styles['Account-container']}
    >

      <div className={styles.Account}>
        <div className={styles['Account-img']}>
          <img
          className={styles.userImg}
          src={user.userPhoto ? `data:image/${user.format};base64,${user.userPhoto}` : '/public/not-found.jpg'}
          alt="img_user" />
        </div>
        {NavOpen
          ? (<p className={styles.Username}>{ user.firstName }</p>)
          : undefined
        }
      </div>

      {modalOpen
        ? (
          <div className={styles.Modal}>
            <NavBar
              links={linksModal}
              NavOpen={true}
              style='navbarModal'
              modal={true}
            />
          </div>
          )
        : undefined}

    </div>
  )
}
