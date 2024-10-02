import { Carousel } from "bootstrap";
import LogoImage from '../img/logo.png';
import BannerImage from '../img/banner.jpg';

function accesorios() {
    return (
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
        <img src= {LogoImage} alt='' fluid/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         <img src = {BannerImage} alt='' fluid/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default accesorios;