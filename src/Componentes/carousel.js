import Carousel from 'react-bootstrap/Carousel';
import LogoImage from '../img/logo.png';
import BannerImage from '../img/banner.jpg';

function UncontrolledExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
      <img src= {LogoImage} height= "300px" weight= "300px" alt='100px' fluid/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src = {BannerImage} alt='' height= "300px" weight= "900px" fluid/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;

