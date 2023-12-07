import React from 'react'
import { Navbar, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react'
import { useDispatch, useSelector } from 'react-redux'
import booksApi from '../../../api/booksApi'
import { onLogout } from '../../../store/auth/authSlice'

export const NavBarContador = () => {
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const handleLogout = async () => {
    await booksApi.post(`api/logout/${user.id}/`)

    localStorage.clear('token')
    dispatch(onLogout())
  }
  return (
    <Navbar className='h-24 absolute'>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem className='flex items-center justify-center'>
            <h1 className='text-5xl text-white font-bold'>Contador</h1>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">

        <NavbarItem>
          <Button
          onClick={handleLogout}
          as={Link}
          color="warning"
          href="#"
          variant="solid">
            Cerrar sesión
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
