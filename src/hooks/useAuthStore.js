import { useDispatch, useSelector } from 'react-redux'
import booksApi from '../api/booksApi'
import { clearErrorMessage, onChecking, onEditDirection, onEditUser, onLogin, onLogout } from '../store/auth/authSlice'
import Swal from 'sweetalert2'

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const token = JSON.parse(localStorage.getItem('token'))

  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }

  //* LOGIN
  const startLogin = async ({ email, password }) => {
    console.log(password)

    dispatch(onChecking())

    try {
      const response = await booksApi.post('api/login/', { email, password })
      const { token, userData } = response.data

      localStorage.setItem('token', JSON.stringify(token))
      const {
        id,
        first_name: firstName,
        last_name: lastName,
        user_photo: userPhoto,
        subscription,
        direction
      } = userData
      dispatch(onLogin({
        id, firstName, lastName, userPhoto, direction, subscription
      }))

      //
    } catch (error) {
      console.log('errorLog: ', error)
      dispatch(onLogout('Credenciales incorrectas o no has activado tu cuenta'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
    }
  }

  //* LOGOUT
  const startLogout = async (uid) => {
    console.log(uid)

    await booksApi.post(`api/logout/${uid}/`)

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
      await booksApi.post('api/registerUser/', {
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

      Swal.fire({
        icon: 'success',
        title: 'Registro completado. Confirme su email',
        showConfirmButton: true,
        timer: 1500
      })
    } catch (error) {
      const { response } = error
      dispatch(onLogout(response.data.error))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)

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
      const {
        first_name: firstName,
        last_name: lastName,
        user_photo: userPhoto,
        id,
        format,
        direction,
        subscription
      } = userData
      dispatch(onLogin({
        id, firstName, lastName, userPhoto, direction, format, subscription
      }))
    } catch (error) {
      localStorage.clear()
      dispatch(onLogout())
    }
  }

  //* Editar usuario
  const startEditUser = async ({ firstNameU, lastNameU, userPhotoU, id: idUser }) => {
    try {
      const requestData = {
        first_name: firstNameU,
        last_name: lastNameU
      }

      if (userPhotoU !== null) {
        requestData.user_photo = userPhotoU
      }
      const response = await booksApi.put(`api/editUser/${idUser}/`, {
        ...requestData
      }, config)

      const { id, first_name: firstName, last_name: lastName, user_photo: userPhoto, format } = response.data.userData
      dispatch(onEditUser({
        id,
        firstName,
        lastName,
        userPhoto,
        format
      }))

      //
    } catch (error) {
      console.log(error)
    }
  }

  //* Editar Direccion

  const startEditDirection = async (direction) => {
    try {
      // console.log(direction)
      const { id, ...rest } = direction

      const response = await booksApi.put(`api/editDirection/${id}/`, rest)
      const { data } = response

      dispatch(onEditDirection(data.dirData))
      Swal.fire({
        icon: 'success',
        title: 'Direccion editada con exito.',
        showConfirmButton: false,
        timer: 1500
      })
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
    startEditDirection,
    checkAuthToken
  }
}
