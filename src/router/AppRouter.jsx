import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { BooksRoutes } from '../books/routes/BooksRoutes'
import { useAuthStore } from '../hooks'
import { useEffect } from 'react'

const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore()

  useEffect(() => {
    checkAuthToken()
  }, [])

  if (status === 'checking') {
    return (
        <h3>Cargando...</h3>
    )
  }

  return (
    <Routes>
      {
        (status === 'not-authenticated')

          ? (
            <>
              <Route path='/auth/*' element={<AuthRoutes /> } />
              <Route path="/*" element={ <Navigate to="/auth/login" /> } />
            </>
            )
          : (
            <>
            <Route path="/*" element={<BooksRoutes /> } />
            <Route path="/*" element={ <Navigate to="/" /> } />
            </>
            )

      }

      <Route path="/*" element={<Navigate to='/auth/login' /> } />

    </Routes>
  )
}

export default AppRouter
