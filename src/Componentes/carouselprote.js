import Carousel from 'react-bootstrap/Carousel';
import ProteinastarImage from '../img/proteinastar.jpg';
import ProteinaenaImage from '../img/proteinaena.png';
import ProteinabodyImage from '../img/proteinabody.png';
import ProteinamervickImage from '../img/proteinamervick.jpg';
import BannerproteinaImage from '../img/bannerproteina.jpg';

function Proteina() {
    return (
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
        <img src= {BannerproteinaImage} height="300px" weight="350px" alt='' fluid/>
        </Carousel.Item>
        <Carousel.Item>
        <img src= {ProteinastarImage} height="300px" weight="350px" alt='' fluid/>
          <Carousel.Caption>
            <h3>Proteína Star Nutrition</h3>
            <p>Precio: $33.000 Sabor: Chocolate Suizo</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         <img src = {ProteinaenaImage} height="300px" weight="350px" alt='' fluid/>
          <Carousel.Caption>
            <h3>Proteína Ena</h3>
            <p>Precio: $27.000 Sabor: Vainilla</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         <img src = {ProteinabodyImage} height="300px" weight="350px" alt='' fluid/>
          <Carousel.Caption>
            <h3>Proteína Body Advance</h3>
            <p>Precio: $29.300 Sabor: Vainilla</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         <img src = {ProteinamervickImage} height="300px" weight="350px" alt='' fluid/>
          <Carousel.Caption>
            <h3>Proteína Mervick</h3>
            <p>Precio: $17.000 Sabor: Vainilla</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Proteina;