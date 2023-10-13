import { useSelector } from 'react-redux'
import { BackButton, EditForumForm, Loader } from '../components'
import styles from '../styles/EditForumPage.module.css'
import { useForumStore } from '../../hooks'
import { useEffect } from 'react'

export const EditForumPage = () => {
  const { forumList, isLoadingForums } = useSelector(state => state.forum)
  const { startLoadingForums } = useForumStore()

  useEffect(() => {
    const cargar = async () => {
      await startLoadingForums()
    }
    cargar()
  }, [])

  if (isLoadingForums === true) {
    return (
      <div style={{ height: '100vh' }}>
      <Loader />
      </div>
    )
  }
  return (
    <div className={styles.editAccountContainer}>
    <BackButton />
    <EditForumForm forumList={forumList} />

</div>
  )
}
