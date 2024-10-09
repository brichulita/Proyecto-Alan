import Carousel from 'react-bootstrap/Carousel';
import ColagenostarImage from '../img/colagenostar.jpg';
import ColagenosaschaImage from '../img/colagenosascha.jpg';
import ColagenoenaImage from '../img/colagenoena.jpg';
import BannercolagenoImage from '../img/bannercolageno.jpg';

function Colageno() {
    return (
      <Carousel data-bs-theme="dark">
         <Carousel.Item>
        <img src= {BannercolagenoImage} alt='' height="300px" weight="350px" fluid/>
        </Carousel.Item>
        <Carousel.Item>
        <img src= {ColagenostarImage} alt='' height="300px" weight="350px" fluid/>
          <Carousel.Caption>
            <h3>Colágeno Star Nutrition</h3>
            <p>Precio: $19.000</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         <img src = {ColagenosaschaImage} alt='' height="300px" weight="350px" fluid/>
          <Carousel.Caption>
            <h3>Colágeno Sasha Fitness</h3>
            <p>Precio: $16.000</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src= {ColagenoenaImage} alt='' height="300px" weight="350px" fluid/>
          <Carousel.Caption>
            <h3>Colágeno Ena</h3>
            <p>Precio: $17.200</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Colageno;