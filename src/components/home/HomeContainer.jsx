import Hero from './Hero';
import Somos from './Somos';
import "./Home.css";
import { Hotsale } from './Hotsale';
import BannerSeparador from './BannerSeparador';


const HomeContainer = () => {
  return (
   <>
   <section className='container Section-hero'>
    <Hero />
    <Somos  />
    <BannerSeparador  />
    <Hotsale  />
   </section>
   </>
  )
}

export default HomeContainer