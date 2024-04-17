import { Container, Figure } from 'react-bootstrap';
import ImgBaner from '../../../public/img/banner/banner-lg.jpg';

const Hero = () => {
  return (
    <Container className="Contenedor-banner">
      <Figure>
        <Figure.Image
          className="img-fluid Imge-baner"
          src={ImgBaner}
          alt="Baner"
        />
      </Figure>
    </Container>
  );
}

export default Hero;
