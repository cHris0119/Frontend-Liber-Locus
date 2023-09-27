import { useDispatch, useSelector } from 'react-redux'
import booksApi from '../api/booksApi'
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store/auth/authSlice'

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking())

    try {
      const response = await booksApi.post('api/login/', { email, password })
      console.log({ response })

      dispatch(onLogin({ email, password }))

      //
    } catch (error) {
      console.log('errorLog: ', { error })
      dispatch(onLogout('Credenciales incorrectas'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
    }
  }

  const startLogout = async () => {
    dispatch(onLogout())
  }

  const startRegister = async ({
    nameDir,
    calle,
    numero,
    idCom,
    firstname,
    lastname,
    email,
    password,
    photoDir
  }) => {
    console.log({
      nombre_dir: nameDir,
      calle,
      numero,
      id_com: idCom,
      first_name: firstname,
      last_name: lastname,
      email,
      password,
      photo_dir: photoDir
    })
    try {
      const response = await booksApi.post('api/registerUser/', {
        nombre_dir: nameDir,
        calle,
        numero,
        id_com: idCom,
        first_name: firstname,
        last_name: lastname,
        email,
        password,
        photo_dir: photoDir
      })

      console.log(response)
    } catch (error) {
      console.log('errorReg: ', error)
    }
  }
  return {
    //* Propiedades
    status,
    user,
    errorMessage,

    //* Metodos
    startLogin,
    startLogout,
    startRegister
  }
}
