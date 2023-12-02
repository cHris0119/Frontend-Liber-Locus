import { HeroSection, LastPosts, TrendForum, Suscriptions } from '../components/index'

export const Home = () => {
  return (
    <div className='animate__animated animate__fadeIn animate__faster'>
      <HeroSection />
      <LastPosts />
      <TrendForum />
      <Suscriptions />
    </div>
  )
}
