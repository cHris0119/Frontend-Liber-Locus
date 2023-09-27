import { useDispatch, useSelector } from 'react-redux'
// import booksApi from '../api/'
import { onChecking, onLogin, onLogout } from '../store/auth/authSlice'

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const startLogin = async ({ email, password }) => {
    console.log({ email, password })
    dispatch(onChecking())

    setTimeout(() => {
      dispatch(onLogin({ name: 'Pepito', uid: '0001' }))
    }, 2000)
    // try {
    //   const response = await booksApi.post('/algo', { email, password })
    //   console.log({response})
    // } catch (error) {
    //   console.log({error})
    //   dipatch(onLogout('Credenciales incorrectas'))
    // setTimeout(() => {
    //     dispatch(clearErrorMessage())
    //   }, 10)
    // }
  }

  const startLogout = async () => {
    dispatch(onLogout())
  }
  return {
    //* Propiedades
    status,
    user,
    errorMessage,

    //* Metodos
    startLogin,
    startLogout
  }
}
