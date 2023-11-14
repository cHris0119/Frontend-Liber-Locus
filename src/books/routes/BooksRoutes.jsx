import { Navigate, Route, Routes } from 'react-router-dom'
import { Home, Marketplace, PostDetail, ShippingDetail, AccountPage, EditAccount, EditDirection, EditPost, ForumPage, ForumMain, CreateDiscussionPage, DiscussionDetail, ReviewsPage, ReviewDetail, CreateReview, CreateForum, EditForumPage, MembersForumPage, ProfilePage, ResultCorrect, ResultIncorrect, AuctionPage, AuctionDetail } from '../pages'
import { DiscussionList, ForumLastPost, ForumList, MisCompras, MisVentas, MyAuction, MyDiscussion, MyPost, MyReview, PublishBookForm, ReviewsList, Sidebar } from '../components'
import useModalOpen from '../hooks/useModalOpen'
import ScrollToTop from '../services/ScrollToTop'
import { EditDiscussionPage } from '../pages/EditDiscussionPage'
import 'animate.css'
import { EditReview } from '../pages/EditReview'
import { useSelector } from 'react-redux'
import { MyShopping } from '../pages/MyShopping'
import { ContactarVendedor } from '../pages/ContactarVendedor'

export const BooksRoutes = () => {
  const [modalOpen, handleModal] = useModalOpen()
  const { reviewList } = useSelector(state => state.review)

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
            <Route path="ultimosPost" element={<ForumLastPost />} />
            <Route path="paraTi" element={<DiscussionList />} />
            <Route path="listaForos" element={<ForumList />} />
            <Route path="/foro/" element={<Navigate to='/foro/ultimosPost' />} />
          </Route>
          <Route path="/miembros/:id" element={<MembersForumPage />} />

          {/* FIN FORO */}

          {/* DISCUSION FORO */}
          <Route path="/crearDiscusion/:id" element={<CreateDiscussionPage />} />
          <Route path="/DiscussionDetail/:id" element={<DiscussionDetail />} />
          <Route path="/editarDiscusion/:id" element={<EditDiscussionPage />} />

          <Route path="/foro/:id" element={<ForumMain />}>
            <Route path="ultimasDiscusiones" element={<DiscussionList />} />
            <Route path="misDiscusiones" element={<MyDiscussion />} />
          </Route>

          <Route path="/editarForo/:id" element={<EditForumPage />} />
          <Route path="/crearForo" element={<CreateForum />} />

          {/* FIN DISCUSION FORO */}

          {/* RESEÑAS */}
          <Route path="reseñas" element={<ReviewsPage />} >

            <Route path="populares" element={<ReviewsList reviewList={reviewList} />} />
            <Route path="recientes" element={<ReviewsList reviewList={reviewList} />} />
            <Route path="paraTi" element={<ReviewsList reviewList={reviewList} />} />

          </Route>

          <Route path="/detalleReseña/:id" element={<ReviewDetail />} />
          <Route path="/crearReseña" element={<CreateReview />} />
          {/* FIN RESEÑAS */}

          {/* MARKETPLACE */}
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="publicarLibro" element={<PublishBookForm />} />
          <Route path="/detallePost/:postId" element={<PostDetail />} />
          <Route path="/detalleEnvio/:postId" element={<ShippingDetail />} />
          <Route path="/detalleEnvio/correct" element={<ResultCorrect />} />
          <Route path="/detalleEnvio/incorrect" element={<ResultIncorrect />} />
          {/* FIN MARKETPLACE */}

          {/* SUBASTAS */}
          <Route path="/subastas" element={<AuctionPage />} />
          <Route path="/detalleSubasta/:id" element={<AuctionDetail />} />

          {/* FIN SUBASTAS */}

          {/* PERFIL */}
          <Route path="/perfil/" element={<AccountPage />}>
            <Route path="misPost" element={<MyPost />} />
            <Route path="misSubastas" element={<MyAuction/>} />
            <Route path="misReseñas" element={<MyReview/>} />
            <Route path="/perfil/" element={<Navigate to='/perfil/misPost' />} />
          </Route>

          <Route path="/myShopping/" element={<MyShopping/>}>
            <Route path="misCompras" element={<MisCompras />} />
            <Route path="misVentas" element={<MisVentas/>} />
          </Route>

          <Route path="/contactar/:id" element={<ContactarVendedor/>} />

          <Route path="/usuario/:id" element={<ProfilePage />} />
          <Route path="/editarPerfil" element={<EditAccount />} />
          <Route path="/editarDireccion" element={<EditDirection />} />
          <Route path="/editarPost/:id" element={<EditPost />} />
          <Route path="/editarReview/:id" element={<EditReview />} />
          {/* FIN PERFIL */}

          <Route path="notificaciones" element={<h1>Notificaciones</h1>} />
          <Route path="/*" element={<Navigate to='home' />} />

        </Routes>

      </main>

      <ScrollToTop />

    </>
  )
}
