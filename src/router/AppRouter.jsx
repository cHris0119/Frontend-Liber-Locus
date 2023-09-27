import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { BooksRoutes } from '../books/routes/BooksRoutes'
import { useSelector } from 'react-redux'

const AppRouter = () => {
  const { status } = useSelector(state => state.auth)
  const authStatus = status

  return (
    <Routes>
      {
        (authStatus !== 'authenticated')

          ? <Route path='/auth/*' element={<AuthRoutes /> } />
          : <Route path="/*" element={<BooksRoutes /> } />

      }

      <Route path="/*" element={<Navigate to='/auth/login' /> } />

    </Routes>
  )
}

export default AppRouter
