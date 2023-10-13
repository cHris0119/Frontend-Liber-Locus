import { useDispatch, useSelector } from 'react-redux'
import { onAddForum, onDeleteForum, onLoadForum, onUpdateForum } from '../store/forum/forumSlice'
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
      console.log(name, img || 'foroImg', category)

      const response = await booksApi.post('api/create_forum/', {
        name,
        forum_img: img || 'forumImg',
        forum_category: parseInt(category)
      },
      config)
      dispatch(onAddForum(response.data.ForumData))
      Swal.fire({
        icon: 'success',
        title: 'Foro creado con exito.',
        showConfirmButton: false,
        timer: 1500
      })
    } catch (error) {
      console.log(error)
    }
  }
  //* EDITAR FORO
  const startEditingForum = async (forum, id) => {
    try {
      console.log('sdas', forum)
      console.log(id)

      const { name, category, img } = forum

      const response = await booksApi.put(`api/forums/update/${parseInt(id)}/`, {
        name,
        forum_category: parseInt(category),
        forum_img: img || 'forumImg'
      }, config)
      const { data } = response

      dispatch(onUpdateForum(data.UpdatedForumData))

      Swal.fire({
        icon: 'success',
        title: 'Foro editado con exito.',
        showConfirmButton: false,
        timer: 1500
      })
    } catch (error) {
      console.log(error)
    }
  }
  //* ELIMINAR FORO
  const startDeletingForum = async (id) => {
    try {
      await booksApi.delete(`api/books/delete/${id}/`, config)

      dispatch(onDeleteForum(id))
      Swal.fire({
        icon: 'success',
        title: 'Foro eliminado con exito.',
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
    startDeletingForum,
    startEditingForum,
    startLoadingForums
  }
}
