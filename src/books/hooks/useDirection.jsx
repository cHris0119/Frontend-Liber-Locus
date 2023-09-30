import { useEffect, useState } from 'react'
import booksApi from '../../api/booksApi'
import { useSelector } from 'react-redux'

export const useDirection = () => {
  const [Loading, setLoading] = useState(true)
  const { user } = useSelector(state => state.auth)
  const [direction, setDirection] = useState({})

  useEffect(() => {
    const getComunas = async () => {
      try {
        const direction = await booksApi.get(`api/obtainDirection/${user.id}/`)
        const data = direction.data.userData
        setDirection(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getComunas()
  }, [])

  const initialForm = direction && {
    comuna: direction.commune,
    calle: direction.calle,
    numero: direction.numero,
    nameDir: direction.nombre
  }

  return {
    Loading, initialForm
  }
}
