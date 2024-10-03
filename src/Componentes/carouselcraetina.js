import Carousel from 'react-bootstrap/Carousel';
import CreatinastarImage from '../img/creatinastar.jpg';
import CreatinabodyImage from '../img/creatinabody.jpg';
import CreatinaenaImage from '../img/creatinaena.png';
function Creatina() {
    return (
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
        <img src= {CreatinastarImage} alt='' fluid/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         <img src = {CreatinabodyImage} alt='' fluid/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         <img src = {CreatinaenaImage} alt='' fluid/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    );
  }
  
  export default Creatina;