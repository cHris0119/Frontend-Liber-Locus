import { useEffect, useState } from 'react'
import { SideBarForum } from '../SideBarForum/SideBarForum'

import styles from './ForumHeader.module.css'
import booksApi from '../../../api/booksApi'

export const ForumHeader = () => {
  const [menu, setMenu] = useState(false)
  // const [userForum, setUserForum] = useState([])

  const handleMenu = () => {
    setMenu(!menu)
  }

  // const token = JSON.parse(localStorage.getItem('token'))
  // const config = {
  //   headers: {
  //     Authorization: `Token ${token}`
  //   }
  // }
  // useEffect(() => {
  //   const getForums = async () => {
  //     try {
  //       const response = await booksApi.get('api/forums/get_user_forums/',
  //         config)
  //       console.log(response)
  //       // setMembers(data.ForumUsersData)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getForums()
  // }, [])

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

       <SideBarForum

       menu={menu} />

    </header>
  )
}
