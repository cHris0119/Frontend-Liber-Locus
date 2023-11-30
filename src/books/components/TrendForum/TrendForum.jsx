import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { HomeSection, Loader } from '../'
import booksApi from '../../../api/booksApi'

import styles from './TrendForum.module.css'

export const TrendForum = () => {
  const [trendForums, setTrendForums] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const token = JSON.parse(localStorage.getItem('token'))
  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }
  useEffect(() => {
    const getMembers = async () => {
      try {
        const response = await booksApi.get('api/forums/get_popular_forums/',
          config)
        setIsLoading(false)
        const { data } = response
        setTrendForums(data.ForumsData)
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }
    }
    getMembers()
  }, [])

  const hasForum = trendForums.length > 0

  return (
    <HomeSection>

      {isLoading
        ? <Loader/>
        : (hasForum
            ? (
          <div className={styles.trendForumContainer}>
            <h2>Foros populares</h2>
            <div className={styles.forumsContainer}>
              {trendForums.map((forum) => (
                <Link
                to={`/foro/${forum.id}/ultimasDiscusiones`}
                key={forum.id}>
                  <article className={styles.forumCard}>
                    <h4>{forum.name}</h4>
                    <span>{'+'}</span>
                  </article>
                </Link>
              ))}
            </div>
          </div>
              )
            : <h3>No se encuentran foros</h3>)}
    </HomeSection>
  )
}
