import React from 'react'
import { Navbar, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react'

export const NavBarContador = () => {
  return (
    <Navbar className='h-24 absolute'>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem className='flex items-center justify-center'>
            <h1 className='text-5xl text-black font-bold'>Contador</h1>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">

        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="solid">
            Cerrar sesión
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
