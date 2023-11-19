import useNavOpen from '../../hooks/useNavOpen'
import { NavBar, AccountButton } from '../'
import { linksNav } from '../../services/linksArray'

import styles from './SideBar.module.css'
import { useEffect, useState } from 'react'

export const Sidebar = ({ handleModal, modalOpen }) => {
  const [wsNotification, setWsNotification] = useState(null)
  console.log(wsNotification)

  const NavOpen = useNavOpen()

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8000/ws/notifications/')

    socket.onopen = (msg) => {
      console.log('ws conectado')
    }
    socket.onclose = () => {
      console.log('ws desconectado')
    }
    socket.onmessage = (msg) => {
      try {
        console.log(msg)
        // const dataServer = JSON.parse(msg.data)
      } catch (error) {
        console.error('Error al procesar WebSocket:', error)
      }
    }

    setWsNotification(socket)
  }, [])

  return (

    <aside
      className={styles.sidebarContainer}
      onClick={() => modalOpen && handleModal()}>

      <NavBar links={linksNav} NavOpen={NavOpen} />

      <AccountButton
        NavOpen={NavOpen}
        modalOpen={modalOpen}
        handleModal={handleModal}/>

    </aside>
  )
}
