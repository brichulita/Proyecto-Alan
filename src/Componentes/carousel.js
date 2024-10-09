import Carousel from 'react-bootstrap/Carousel'; 
import LogoImage from '../img/logo.png';
import BannerImage from '../img/banner.jpg';

function UncontrolledExample() {
  return (
    <Carousel data-bs-theme="dark" >
      <Carousel.Item style={{ paddingTop: '20px' }}> 
        <img src={LogoImage} height="500px" width="800px" alt='logo' fluid/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ paddingTop: '20px' }}> 
        <img src={BannerImage} height="500px" width="1400px" alt='banner' fluid/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
