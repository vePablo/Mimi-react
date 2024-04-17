import { CCarousel, CCarouselItem, CImage } from '@coreui/react'


const Slide = () => {
  return (
    <>
    <CCarousel className='w-50' controls indicators>
  <CCarouselItem>
    <CImage className="d-block w-100" src="public/img/Cuadernos/cuaderno-1.jpg" alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src="public/img/Cuadernos/cuaderno-2.jpg" alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src="public/img/Cuadernos/cuaderno-3.jpg" alt="slide 3" />
  </CCarouselItem>
</CCarousel>  
    </>
  )
}

export default Slide;
