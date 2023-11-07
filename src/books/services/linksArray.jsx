import {
  AiFillHome,
  AiFillShop,
  AiFillNotification,
  AiFillShopping
} from 'react-icons/ai'
import { BsFillPeopleFill } from 'react-icons/bs'
import { MdReviews } from 'react-icons/md'
import { BiSolidUser } from 'react-icons/bi'

export const linksNav = [
  {
    label: 'Inicio',
    to: '/',
    icon: <AiFillHome />
  },
  {
    label: 'Marketplace',
    to: '/marketplace',
    icon: <AiFillShop />
  },
  {
    label: 'Foro',
    to: '/foro',
    icon: <BsFillPeopleFill />
  },
  {
    label: 'Reseñas',
    to: '/reseñas/populares',
    icon: <MdReviews />
  },
  {
    label: 'Notificaciones',
    to: '/notificaciones',
    icon: <AiFillNotification />,
    number: 0
  }
]

export const linksModal = [
  {
    label: 'Perfil',
    to: '/perfil',
    icon: <BiSolidUser />
  },
  {
    label: 'Mis compras',
    to: '/misCompras',
    icon: <AiFillShopping />
  }
  // {
  //   label: 'Reportar un problema',
  //   to: '/reportError',
  //   icon: <BiCommentError />
  // },
]
