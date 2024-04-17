import { Container, Figure } from 'react-bootstrap';
import ImgB from '../../../public/img/banner/banner2.jpg';

const BannerSeparador = () => {
  return (
    <Container className='mt-4'>
      <Figure>
        <Figure.Image
          className="img-fluid"
          src={ImgB}
          alt="Banner"
        />
      </Figure>
    </Container>
  );
}

export default BannerSeparador;
