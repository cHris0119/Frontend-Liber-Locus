import 'animate.css'

import { MarketplaceHeader, PostList } from '../components'

export const Marketplace = () => {
  return (

    <div
    className='animate__animated animate__faster'
    style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '5vh', paddingBottom: '4.5rem' }}>

      <h1 style={{ color: '#fff', textAlign: 'center', borderBottom: '2px solid #fff', paddingBottom: '20px', display: 'inline-block' }}>MARKETPLACE</h1>

      <MarketplaceHeader />
      <PostList />
    </div>

  )
}
