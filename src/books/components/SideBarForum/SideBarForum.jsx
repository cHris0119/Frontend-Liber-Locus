import { Link } from 'react-router-dom'

import styles from './SideBarForum.module.css'

export const SideBarForum = ({ menu }) => {
  return (
    <div
    className={`
    ${styles.forumHeaderNav}
    ${menu ? styles.isActive : ''}
    `}>
        <h2>Mis foros</h2>
        <ul className={styles.forumHeaderUl}>
            <li className={styles.forumHeaderLi}>
                <Link>
                    Foro 1
                </Link>
            </li>
            <li className={styles.forumHeaderLi}>
                <Link>
                    Foro 2
                </Link>
            </li>
        </ul>
    </div>
  )
}
