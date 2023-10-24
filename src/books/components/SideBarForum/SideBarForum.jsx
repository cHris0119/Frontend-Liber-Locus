import { Link } from 'react-router-dom'

import styles from './SideBarForum.module.css'

export const SideBarForum = ({ menu, myForums }) => {
  const arr = ['foro1', 'foro2']
  return (
    <div
    className={`
    ${styles.forumHeaderNav}
    ${menu ? styles.isActive : ''}
    `}>
        <h2>Mis foros</h2>

        <ul className={styles.forumHeaderUl}>
            {arr.map((foro) => (
                <li
                key={foro}
                className={styles.forumHeaderLi}>

                <Link to={`/foro/${foro}`}>
                    {foro} <span>admin</span>
                </Link>

                </li>
            ))}
        </ul>
    </div>
  )
}
