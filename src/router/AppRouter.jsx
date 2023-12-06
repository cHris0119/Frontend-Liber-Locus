import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { BooksRoutes } from '../books/routes/BooksRoutes'
import { useAuthStore } from '../hooks'
import { useEffect } from 'react'
import { Loader } from '../books/components'
import { ContadorPage, ResultCorrect } from '../books/pages'

const AppRouter = () => {
  const { status, user, checkAuthToken } = useAuthStore()

  useEffect(() => {
    checkAuthToken()
  }, [])

  if (status === 'checking') {
    return (
      <div style={{ height: '100vh' }}>
      <Loader />
      </div>
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
          : (user.role !== 'None')
              ? (
                <>
                <Route path="/*" element={ <ContadorPage /> } />
                <Route path="/detalleEnvio/correct" element={<ResultCorrect />} />
                </>
                )
              : (<>
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
