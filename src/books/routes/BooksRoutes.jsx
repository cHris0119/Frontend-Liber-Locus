import { Navigate, Route, Routes } from 'react-router-dom'
import { Home, Marketplace, PaymentSelection, PostDetail, ShippingDetail, AccountPage, EditAccount, EditDirection, EditPost, ForumPage, ForumMain, CreateDiscussionPage, DiscussionDetail, ReviewsPage, ReviewDetail, CreateReview } from '../pages'
import { DiscussionList, ForumList, Loader, MyAuction, MyDiscussion, MyPost, MyReview, PublishBookForm, ReviewsList, Sidebar } from '../components'
import useModalOpen from '../hooks/useModalOpen'
import ScrollToTop from '../services/ScrollToTop'
import { EditDiscussionPage } from '../pages/EditDiscussionPage'
import 'animate.css'
import { EditReview } from '../pages/EditReview'
import { useEffect } from 'react'
import { useBookStore } from '../../hooks'
import { useSelector } from 'react-redux'

export const BooksRoutes = () => {
  const [modalOpen, handleModal] = useModalOpen()
  const { startLoadingEvents } = useBookStore()

  const { isLoadingBooks } = useSelector(state => state.book)

  useEffect(() => {
    startLoadingEvents()
  }, [])

  if (isLoadingBooks === true) {
    return (
      <div style={{ height: '100vh' }}>
      <Loader />
      </div>
    )
  }
  return (
    <>

      <Sidebar
        handleModal={handleModal}
        modalOpen={modalOpen} /
      >

      <main
        onClick={() => modalOpen && handleModal()}
        className="main"
      >

        <Routes>
          <Route path="home" element={<Home />} />

          {/* FORO */}
          <Route path="foro" element={<ForumPage />}>
            <Route path="ultimosPost" element={<DiscussionList />} />
            <Route path="paraTi" element={<DiscussionList />} />
            <Route path="listaForos" element={<ForumList />} />
            <Route path="/foro/" element={<Navigate to='/foro/ultimosPost' />} />
          </Route>
          {/* FIN FORO */}

          {/* DISCUSION FORO */}
          <Route path="/crearDiscusion" element={<CreateDiscussionPage />} />
          <Route path="/DiscussionDetail/:id" element={<DiscussionDetail />} />
          <Route path="/editarDiscusion/:id" element={<EditDiscussionPage />} />

          <Route path="/foro/:nombre" element={<ForumMain />}>
            <Route path="ultimasDiscusiones" element={<DiscussionList />} />
            <Route path="misDiscusiones" element={<MyDiscussion />} />
          </Route>
          {/* FIN DISCUSION FORO */}

          {/* RESEÑAS */}
          <Route path="reseñas" element={<ReviewsPage />} >

            <Route path="populares" element={<ReviewsList />} />
            <Route path="recientes" element={<ReviewsList />} />
            <Route path="paraTi" element={<ReviewsList />} />

          </Route>

          <Route path="/detalleReseña/:id" element={<ReviewDetail />} />
          <Route path="/crearReseña" element={<CreateReview />} />
          {/* FIN RESEÑAS */}

          {/* MARKETPLACE */}
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="publicarLibro" element={<PublishBookForm />} />
          <Route path="/detallePost/:postId" element={<PostDetail />} />
          <Route path="/detalleEnvio/:postId" element={<ShippingDetail />} />
          <Route path="/seleccionPago/:postId" element={<PaymentSelection />} />
          {/* FIN MARKETPLACE */}

          {/* PERFIL */}
          <Route path="/perfil/" element={<AccountPage />}>
            <Route path="misPost" element={<MyPost />} />
            <Route path="misSubastas" element={<MyAuction/>} />
            <Route path="misReseñas" element={<MyReview/>} />
            <Route path="/perfil/" element={<Navigate to='/perfil/misPost' />} />
          </Route>

          <Route path="/editarPerfil" element={<EditAccount />} />
          <Route path="/editarDireccion" element={<EditDirection />} />
          <Route path="/editarPost/:id" element={<EditPost />} />
          <Route path="/editarReview" element={<EditReview />} />
          {/* FIN PERFIL */}

          <Route path="notificaciones" element={<h1>Notificaciones</h1>} />
          <Route path="/*" element={<Navigate to='home' />} />

        </Routes>

      </main>

      <ScrollToTop />

    </>
  )
}
