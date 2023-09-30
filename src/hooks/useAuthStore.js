import { useDispatch, useSelector } from 'react-redux'
import booksApi from '../api/booksApi'
import { clearErrorMessage, onChecking, onEditUser, onLogin, onLogout } from '../store/auth/authSlice'

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  //* LOGIN
  const startLogin = async ({ email, password }) => {
    dispatch(onChecking())

    try {
      const response = await booksApi.post('api/login/', { email, password })
      console.log({ response })
      const { token, userData } = response.data
      const { first_name: firstName, id, last_name: lastName, user_photo: userPhoto } = userData

      localStorage.setItem('token', JSON.stringify(token))
      dispatch(onLogin({ id, firstName, lastName, userPhoto }))

      //
    } catch (error) {
      console.log('errorLog: ', { error })
      dispatch(onLogout('Credenciales incorrectas'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
    }
  }

  //* LOGOUT
  const startLogout = async (uid) => {
    console.log(uid)

    const response = await booksApi.post(`api/logout/${uid}/`)
    console.log(response)

    localStorage.clear('token')
    dispatch(onLogout())
  }

  //* REGISTER
  const startRegister = async ({
    nameDir,
    calle,
    numero,
    idCom,
    firstname,
    lastname,
    email,
    password,
    imgUser
  }) => {
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
        photo_dir: imgUser
      })

      console.log(response)
    } catch (error) {
      console.log('errorReg: ', error)
    }
  }

  //* Revalidar Token
  const checkAuthToken = async () => {
    const token = localStorage.getItem('token')
    if (!token) return dispatch(onLogout())

    try {
      const tokenSinComillas = token.replace(/"/g, '')

      const response = await booksApi.get(`api/obtainUser/${tokenSinComillas}`)

      const { userData } = response.data

      const { first_name: firstName, id, last_name: lastName, user_photo: userPhoto } = userData

      dispatch(onLogin({ id, firstName, lastName, userPhoto }))
    } catch (error) {
      localStorage.clear()
      dispatch(onLogout())
    }
  }

  //* Editar usuario
  const startEditUser = async ({ firstName, lastName, userPhoto, id }) => {
    try {
      const response = await booksApi.put(`api/editUser/${id}/`, {
        first_name: firstName,
        last_name: lastName,
        photo_dir: userPhoto
      })
      console.log(response)
      dispatch(onEditUser({ id, firstName, lastName, userPhoto }))
      //
    } catch (error) {
      console.log(error)
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
    startRegister,
    startEditUser,
    checkAuthToken
  }
}
