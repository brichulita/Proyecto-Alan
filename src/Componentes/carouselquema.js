import Carousel from 'react-bootstrap/Carousel';
import QuemadorenaImage from '../img/quemadorena.png';
import QuemadorstarImage from '../img/quemadorstar.png';
import QuemadorbodyImage from '../img/quemadorbody.png';

function Quemador() {
    return (
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
        <img src= {QuemadorenaImage} alt='' fluid/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         <img src = {QuemadorstarImage} alt='' fluid/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         <img src = {QuemadorbodyImage} alt='' fluid/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Quemador;