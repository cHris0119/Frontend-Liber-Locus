import useNavOpen from '../../hooks/useNavOpen'
import { NavBar, AccountButton } from '../'
import { linksNav } from '../../services/linksArray'

import styles from './SideBar.module.css'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export const Sidebar = ({ handleModal, modalOpen }) => {
  const [wsNotification, setWsNotification] = useState(null)
  // console.log(wsNotification)

  const NavOpen = useNavOpen()

  useEffect(() => {
    const connectWebSocket = () => {
      const socket = new WebSocket('ws://localhost:8000/ws/notifications/')

      socket.onopen = (event) => {
        console.log('WebSocket conectado')
      }

      socket.onclose = (event) => {
        console.log('WebSocket desconectado. Intentando reconectar en 5 segundos...')
        setTimeout(() => {
          connectWebSocket() // Intentar reconectar después de 5 segundos
        }, 5000)
      }

      socket.onmessage = (event) => {
        try {
          console.log(event)
          toast(
            'Esta es una notificacion de prueba, deberia aparecer que tu libro fue comprado con exito.',
            {
              duration: 6000
            }
          )
        } catch (error) {
          console.error('Error al procesar WebSocket:', error)
        }
      }

      // setWsNotification(socket)
    }

    // Iniciar la conexión al montar el componente
    connectWebSocket()

    // Limpieza al desmontar el componente
    return () => {
      if (wsNotification) {
        wsNotification.close()
      }
    }
  }, [])

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
