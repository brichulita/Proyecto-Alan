import Carousel from 'react-bootstrap/Carousel';
import ColagenostarImage from '../img/colagenostar.jpg';
import ColagenosaschaImage from '../img/colagenosascha.jpg';
import ColagenoenaImage from '../img/colagenoena.jpg';

function Colageno() {
    return (
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
        <img src= {ColagenostarImage} alt='' fluid/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         <img src = {ColagenosaschaImage} alt='' fluid/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src= {ColagenoenaImage} alt='' fluid/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Colageno;