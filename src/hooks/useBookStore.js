import { useSelector } from 'react-redux'

export const useBookStore = () => {
  const { bookList } = useSelector(state => state.book)

  return {
    //* Propiedades
    bookList
    //* Metodos
  }
}
