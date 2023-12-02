import { HomeSection } from '../'

import styles from './HeroSection.module.css'

export const HeroSection = () => {
  return (
    <HomeSection style='homeHero'>
      <div className={`${styles.heroLeft}`}>
        <h1 className={`${styles.homeTitle}`}>¿Buscas libros al mejor precio?</h1>
        <p>No pierdas la oportunidad de vender y comprar el libro que tu quieras con envío seguro.</p>
        <button className={styles.heroButton}>Ir al marketplace</button>
      </div>
    </HomeSection>

  )
}
