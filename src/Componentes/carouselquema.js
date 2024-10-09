import Carousel from 'react-bootstrap/Carousel';
import QuemadorenaImage from '../img/quemadorena.png';
import QuemadorstarImage from '../img/quemadorstar.png';
import QuemadorbodyImage from '../img/quemadorbody.png';
import BannerquemaImage from '../img/bannerquema.jpg';

function Quemador() {
    return (
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
        <img src= {BannerquemaImage} alt='' height="300px" weight="350px" fluid/>
        </Carousel.Item>
        <Carousel.Item>
        <img src= {QuemadorenaImage} alt='' height="300px" weight="350px" fluid/>
          <Carousel.Caption>
            <h3>Quemador Ena</h3>
            <p>Precio: $9.600</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         <img src = {QuemadorstarImage} alt='' height="300px" weight="350px" fluid/>
          <Carousel.Caption>
            <h3>Quemador Star Nutrition</h3>
            <p>Precio: $13.000</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         <img src = {QuemadorbodyImage} alt='' height="300px" weight="350px" fluid/>
          <Carousel.Caption>
            <h3>Quemador Body Advance</h3>
            <p>Precio: $9.300</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Quemador;