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
            <svg className={styles.forumHeaderSvg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </button>

       <SideBarForum menu={menu} />

    </header>
  )
}
