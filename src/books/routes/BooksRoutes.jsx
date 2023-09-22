import { Navigate, Route, Routes } from 'react-router-dom'
import { Home, Marketplace, PaymentSelection, PostDetail, ShippingDetail, AccountPage, EditAccount, EditDirection, EditPost, ForumPage, ForumMain, CreateDiscussionPage } from '../pages'
import { DiscussionList, ForumList, MyAuction, MyDiscussion, MyPost, PublishBookForm, Sidebar } from '../components'
import useModalOpen from '../hooks/useModalOpen'
import ScrollToTop from '../services/ScrollToTop'
import { EditDiscussionPage } from '../pages/EditDiscussionPage'

export const BooksRoutes = () => {
  const [modalOpen, handleModal] = useModalOpen()
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
          <Route path="marketplace" element={<Marketplace />} />

          <Route path="foro" element={<ForumPage />}>
            <Route path="ultimosPost" element={<DiscussionList />} />
            <Route path="paraTi" element={<DiscussionList />} />
            <Route path="listaForos" element={<ForumList />} />
            <Route path="/foro/" element={<Navigate to='/foro/ultimosPost' />} />
          </Route>
          <Route path="/crearDiscusion" element={<CreateDiscussionPage />} />
          <Route path="/editarDiscusion/:id" element={<EditDiscussionPage />} />

          <Route path="/foro/:nombre" element={<ForumMain />}>

            <Route path="ultimasDiscusiones" element={<DiscussionList />} />
            <Route path="misDiscusiones" element={<MyDiscussion />} />

          </Route>

          <Route path="reseña" element={<h1>Reseñas</h1>} />
          <Route path="notificaciones" element={<h1>Notificaciones</h1>} />
          <Route path="publicarLibro" element={<PublishBookForm />} />
          <Route path="/detallePost/:postId" element={<PostDetail />} />
          <Route path="/detalleEnvio/:postId" element={<ShippingDetail />} />
          <Route path="/seleccionPago/:postId" element={<PaymentSelection />} />

          <Route path="/perfil/" element={<AccountPage />}>
            <Route path="misPost" element={<MyPost />} />
            <Route path="misSubastas" element={<MyAuction/>} />
            <Route path="/perfil/" element={<Navigate to='/perfil/misPost' />} />
          </Route>

          <Route path="/editarPerfil" element={<EditAccount />} />
          <Route path="/editarDireccion" element={<EditDirection />} />
          <Route path="/editarPost" element={<EditPost />} />

          <Route path="/*" element={<Navigate to='home' />} />

        </Routes>

      </main>

      <ScrollToTop />

    </>
  )
}
