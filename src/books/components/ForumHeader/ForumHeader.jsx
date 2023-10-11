import { useState } from 'react'
import { SideBarForum } from '../SideBarForum/SideBarForum'

import styles from './ForumHeader.module.css'

export const ForumHeader = () => {
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }

  return (
    <header className={styles.forumHeaderContainer}>
        <form className={styles.formForumHeader}>
            <input
            type='text'
            placeholder='Buscar foros'
            className={styles.formInput}
            />

            <input
            type="submit"
            value='Buscar'
            className={styles.formInput}
            />
        </form>

        <button
        className={styles.forumHeaderButton}
        onClick={ handleMenu }
        >
        </button>

       <SideBarForum menu={menu} />

    </header>
  )
}
