import useNavOpen from '../../hooks/useNavOpen'
import { NavBar, AccountButton } from '../'
import { linksNav } from '../../services/linksArray'

import styles from './SideBar.module.css'
import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

export const Sidebar = ({ handleModal, modalOpen }) => {
  const { user } = useSelector(state => state.auth)

  const NavOpen = useNavOpen()

  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:8000/ws/notifications/${user.id}/`)

    socket.onopen = (event) => {
      console.log('WebSocket conectado')
    }

    socket.onclose = (event) => {
      console.log('WebSocket desconectado.')
    }

    socket.onmessage = async (msg) => {
      try {
        const dataServer = JSON.parse(msg.data)
        const message = JSON.parse(dataServer.message)
        console.log(message)
        toast(
          message.message,
          {
            duration: 6000
          }

        )
      } catch (error) {
        console.error('Error al procesar WebSocket:', error)
      }
    }
  }

  , [])

  return (
  <>
    <Toaster
    position="bottom-right"
    reverseOrder={false}
    />

    <aside
      className={styles.sidebarContainer}
      onClick={() => modalOpen && handleModal()}>

      <NavBar links={linksNav} NavOpen={NavOpen} />

      <AccountButton
        NavOpen={NavOpen}
        modalOpen={modalOpen}
        handleModal={handleModal}/>

    </aside>
  </>
  )
}
