import Carousel from 'react-bootstrap/Carousel';
import ProteinastarImage from '../img/proteinastar.jpg';
import ProteinaenaImage from '../img/proteinaena.png';
import ProteinabodyImage from '../img/proteinabody.png';
import ProteinamervickImage from '../img/proteinamervick.jpg';

function Proteina() {
    return (
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
        <img src= {ProteinastarImage} alt='' fluid/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         <img src = {ProteinaenaImage} alt='' fluid/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         <img src = {ProteinabodyImage} alt='' fluid/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         <img src = {ProteinamervickImage} alt='' fluid/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Proteina;