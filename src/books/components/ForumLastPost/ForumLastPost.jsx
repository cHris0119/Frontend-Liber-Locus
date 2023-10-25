// import { useEffect, useState } from 'react'
// import { DiscussionCard } from '../DiscussionCard/DiscussionCard'
// import booksApi from '../../../api/booksApi'
// import { Loader } from '../Loader/Loader'

// import styles from './ForumLastPost.module.css'

// export const ForumLastPost = () => {
//   const [discussion, setDiscussion] = useState([])
//   const [isLoading, setIsLoading] = useState(true)
//   const token = JSON.parse(localStorage.getItem('token'))
//   const config = {
//     headers: {
//       Authorization: `Token ${token}`
//     }
//   }
//   useEffect(() => {
//     const getMembers = async () => {
//       try {
//         const response = await booksApi.get(`api/forums/get_forum_discussions/${id}/`,
//           config)
//         setIsLoading(false)
//         const { data } = response
//         setDiscussion(data.ForumDiscussionsData)
//       } catch (error) {
//         setIsLoading(false)
//         console.log(error)
//       }
//     }
//     getMembers()
//   }, [])

//   const hasDiscussion = discussion.length > 0

//   console.log(hasDiscussion)

//   return (

//     <div className={styles.discussionListContainer}>
//       { isLoading
//         ? <Loader />
//         : (hasDiscussion
//             ? (
//                 discussion?.map((discussion) => (
//               <DiscussionCard
//               key={discussion.id}
//               discussion={discussion}
//               />
//                 ))
//               )
//             : <h3>No se encuentra discusiones</h3>
//           ) }
//     </div>

//   )
// }
