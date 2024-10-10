import Carousel from 'react-bootstrap/Carousel';
import StrapsImage from '../img/straps.jpg';
import GuantesImage from '../img/guantes.jpg';
import CinturonImage from '../img/cinturon.png';
import ElasticoImage from '../img/elastico.jpg';
import BanneraccesoriosImage from '../img/banneraccesorios.jpg';
import './estiloscarousel.css'; 

function Accesorios() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img src={BanneraccesoriosImage}  alt='' height="300px" width="900px" fluid />
            </Carousel.Item>
            <Carousel.Item>
                <img src={StrapsImage} alt='' height="400px" width="500px" fluid />
                <Carousel.Caption className="carousel-caption">
                    <h3>Straps</h3>
                    <p>Marca: PressLove Precio: $14.500</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={GuantesImage} alt='' height="400px" width="500px" fluid />
                <Carousel.Caption className="carousel-caption">
                    <h3>Guantes</h3>
                    <p>Marca: Quuz Precio: $11.000 </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={CinturonImage} alt='' height="400px" width="500px" fluid />
                <Carousel.Caption className="carousel-caption">
                    <h3>Cinturón</h3>
                    <p>Marca: Balboafit Precio: $20.000</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={ElasticoImage} alt='' height="400px" width="500px" fluid />
                <Carousel.Caption className="carousel-caption">
                    <h3>Elástico</h3>
                    <p>Marca: Bs Fit Precio: $9.000</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Accesorios;
