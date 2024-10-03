import Carousel from 'react-bootstrap/Carousel';
import StrapsImage from '../img/straps.jpg';
import GuantesImage from '../img/guantes.jpg';
import CinturonImage from '../img/cinturon.png';
import ElasticoImage from '../img/elastico.jpg';

function Accesorios() {
    return (
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
        <img src= {StrapsImage} alt='' height="400px" weight="500px" fluid/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         <img src = {GuantesImage} alt='' height="400px" weight="500px" fluid/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src= {CinturonImage} alt='' height="400px" weight="500px" fluid/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         <img src = {ElasticoImage} alt='' height="400px" weight="500px" fluid/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Accesorios;