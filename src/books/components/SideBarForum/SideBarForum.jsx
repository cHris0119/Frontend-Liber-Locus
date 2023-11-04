import { Link } from 'react-router-dom'

import styles from './SideBarForum.module.css'

export const SideBarForum = ({ menu, userForum }) => {
  console.log(userForum)
  return (
    <div
    className={`
    ${styles.forumHeaderNav}
    ${menu ? styles.isActive : ''}
    `}>
        <h2>Mis foros</h2>

        <ul className={styles.forumHeaderUl}>
            {userForum?.map((foro) => (
                <li
                key={foro.forum_id}
                className={styles.forumHeaderLi}>

                <Link
                to={`/foro/${foro.forum_id}`}>
                    {foro.name}
                </Link>

                </li>
            ))}
        </ul>
    </div>
  )
}
