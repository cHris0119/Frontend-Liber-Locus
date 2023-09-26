import { BackButton } from '../components'

import styles from '../styles/ReviewDetail.module.css'

export const ReviewDetail = () => {
  return (
    <div className={styles.reviewDetailContainer}>
      <BackButton />
        <div className={styles.container}>

        <div className={styles.userContainer}>

          <div className={styles.imgContainer}>
            <img src="https://a.ltrbxd.com/resized/avatar/upload/1/2/0/3/7/7/7/shard/avtr-0-1000-0-1000-crop.jpg?v=ff62b2f12e" alt="userIMG" />
          </div>
          <div className={styles.userInfo}>
            <p>Publicada hace 3 horas</p>
            <p>Por <span>UserName</span></p>
          </div>

        </div>

        <div className={styles.reviewContainer}>

          <div className={styles.bookDetails}>

            <div className={styles.bookImg}>
              <img src="https://images.cdn3.buscalibre.com/fit-in/360x360/6f/b4/6fb45c30bd70046fc578acd09cda2c42.jpg" alt="bookImg" />
            </div>
            <div className={styles.bookInfo}>
              <h1>Dracula</h1>
              <span>Valoración: 8/10</span>
            </div>

          </div>

          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quam, quasi voluptates, exercitationem eum labore numquam provident quo, nostrum consequatur fugiat. Consequuntur ea asperiores tenetur esse veritatis itaque repellendus accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim minus error ipsam, quaerat officia voluptatem at fuga dolorum? Autem nemo nihil ipsam repudiandae atque impedit similique tempore. Quod, nihil aperiam?
          Numquam suscipit sunt, inventore temporibus saepe asperiores incidunt at assumenda doloremque alias itaque dignissimos dolorum laboriosam eos quo error earum. Ullam labore accusamus, architecto iure consequatur doloribus rem ad repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quae quisquam, voluptas voluptates quia vitae delectus nulla facere, nostrum blanditiis officiis officia, consequatur id fugiat exercitationem amet quidem et repellendus?
          Illo praesentium numquam vitae dolorem ratione deserunt libero quos, tempore sed voluptates unde iste culpa maxime doloremque consequatur! Cum illo sunt deserunt nam veritatis aspernatur nihil cumque aut nobis eveniet.
          Nostrum, laborum libero? Voluptatibus eos saepe atque corporis? Ducimus asperiores nisi libero cupiditate sapiente est excepturi ut, similique quisquam nesciunt dolore veniam modi eveniet earum voluptas numquam, quia commodi? Ab.
          Beatae tenetur officia voluptatem iste cum, perferendis, earum totam reprehenderit eveniet non, aut laborum debitis ab adipisci sequi quidem quae id. Labore veritatis architecto reiciendis at culpa, amet corrupti natus.
          Suscipit dignissimos est soluta, aperiam officiis nostrum odit accusamus error reprehenderit. Odit quo inventore earum blanditiis ex! Officiis fugit blanditiis, asperiores magnam ut nemo! Ratione asperiores nulla repellendus temporibus laudantium?
          Eum saepe facilis laborum maxime ipsum atque pariatur distinctio nesciunt magnam animi ad ipsam illo optio nihil delectus, expedita necessitatibus quidem facere perspiciatis quos totam. Numquam odit similique laudantium repellendus.
          Quo assumenda, consectetur iure voluptatem corrupti unde placeat ipsum, non veniam recusandae odit! Perferendis commodi aspernatur, nobis assumenda ipsam dolore totam deleniti ea eius laboriosam saepe ad deserunt sed quo.
          Quidem mollitia voluptatem delectus, error ex nulla facere quod debitis iusto inventore perferendis sapiente unde atque ab numquam corporis, blanditiis eveniet itaque natus cum possimus! Veritatis hic eaque quisquam. Voluptatibus?
          Numquam magni, quaerat repellat sapiente hic, harum aliquid vero, sit distinctio animi nesciunt optio veritatis recusandae molestiae veniam in aut voluptatibus? Ullam vero tempora corrupti laboriosam? Dolore tempora nisi temporibus!
          Illo quo qui amet perferendis omnis voluptatibus explicabo illum eligendi. Nulla illo illum vel, quidem dolore deleniti est blanditiis placeat sapiente ut ea sint laudantium quas officia. Quam, quo praesentium.</p>

          <div className={styles.likeButton}>
          <button>Like</button>
          <span>10 likes</span>
          </div>
        </div>

        </div>

    </div>
  )
}
