import Carousel from 'react-bootstrap/Carousel';
import CreatinastarImage from '../img/creatinastar.jpg';
import CreatinabodyImage from '../img/creatinabody.jpg';
import CreatinaenaImage from '../img/creatinaena.png';
import BannercreatinaImage from '../img/bannercreatina.jpg'
function Creatina() {
    return (
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
        <img src= {BannercreatinaImage} alt='' height="300px" weight="350px" fluid/>
        </Carousel.Item>
        <Carousel.Item>
        <img src= {CreatinastarImage} alt='' height="300px" weight="350px" fluid/>
          <Carousel.Caption>
            <h3>Creatina Star Nutrition</h3>
            <p>Precio: $13.500</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         <img src = {CreatinabodyImage} alt='' height="300px" weight="350px" fluid/>
          <Carousel.Caption>
            <h3>Creatina Body Advance</h3>
            <p>Precio: $11.800</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         <img src = {CreatinaenaImage} alt='' height="300px" weight="350px" fluid/>
          <Carousel.Caption>
            <h3>Creatina Ena</h3>
            <p>Precio: $9.900</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    );
  }
  
  export default Creatina;