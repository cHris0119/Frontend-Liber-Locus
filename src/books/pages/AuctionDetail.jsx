import { Link } from 'react-router-dom'
import { BackButton, FormAuction } from '../components'

import styles from '../styles/AuctionDetail.module.css'

export const AuctionDetail = () => {
  return (
    <div className={`${styles.container} animate__animated animate__fadeIn animate__faster`}>
    <BackButton />
  <div className={styles.productDetailContainer}>
    <div className={styles.productImgContainer}>
      <img
      className={styles.productImg}
      src='#'
      alt='aaa' />
    </div>

    {/* Este div tiene que ser un componente. */}
    <div className={styles.productInfo}>
      <ul className={styles.productInfoNames}>
        <li className={styles.productCategory}>Finaliza en 3d</li>
        <li className={styles.productName}>Harry potter coleccionista</li>
        <li className={styles.productPrice}>Puja actual: 10.000 CLP</li>

        <li className={styles.productSeller}>
          Vendedor:
          <Link to=''> Juan lopez
          </Link>
          </li>

        <li className={styles.productDescription}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptatum fugiat aliquam consequatur veritatis voluptates deserunt quibusdam illum! Ratione sequi accusantium ad, laudantium explicabo odio pariatur quam. Molestiae, enim? Esse.</p></li>
      </ul>

      <div className={styles.buyButtonContainer}>

        <FormAuction />

      </div>
    </div>
  </div>

</div>
  )
}
