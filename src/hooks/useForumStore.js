import { useDispatch, useSelector } from 'react-redux'
import { onAddForum, onLoadForum } from '../store/forum/forumSlice'
import Swal from 'sweetalert2'
import booksApi from '../api/booksApi'

export const useForumStore = () => {
  const { forumList } = useSelector(state => state.forum)

  const dispatch = useDispatch()
  const token = JSON.parse(localStorage.getItem('token'))
  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }
  //* AGREGAR FORO
  const startAddForum = async (forum) => {
    const { name, img, category } = forum
    try {
      const response = await booksApi.post('api/create_forum/', {
        name,
        forum_img: img,
        forum_category: category
      },
      config)
      console.log(response)
      dispatch(onAddForum(response.data.reviewData))
      Swal.fire({
        icon: 'success',
        title: 'Reseña agregada con exito.',
        showConfirmButton: false,
        timer: 1500
      })
    } catch (error) {
      console.log(error)
    }
  }

  //* CARGAR FOROS
  const startLoadingForums = async () => {
    try {
      const { data } = await booksApi.get('api/forums/get_all_forums/', config)
      console.log('dataR', data)
      dispatch(onLoadForum(data.ForumsData))
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error al cargar foros.',
        showConfirmButton: false,
        timer: 1500
      })
      console.log(error)
    }
  }
  return {
    //* PROPIEDADES
    forumList,
    //* METODOS
    startAddForum,
    startLoadingForums
  }
}
