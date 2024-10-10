
import './App.css';
import BasicExample from './Componentes/navbar';
import UncontrolledExample from './Componentes/carousel';
import Accesorios from './Componentes/carouselaccesorios';
import Colageno from './Componentes/carouselcolageno';
import Creatina from './Componentes/carouselcreatina';
import Proteina from './Componentes/carouselprote';
import Quemador from './Componentes/carouselquema';
import ProductoDisponible from './Componentes/ProductoDisponible';
import Carrito from './Componentes/carrito';

function App() {
  return (
    <div className="App">
      <div id='home'>
      <BasicExample></BasicExample>
      </div>
      <UncontrolledExample></UncontrolledExample>
      <div id='accesorios'>
      <Accesorios></Accesorios> 
      </div>
      <div id='colageno'>
      <Colageno></Colageno>
      </div>
      <div id='creatina'>
      <Creatina></Creatina>
      </div>
      <div id='proteina'>
      <Proteina></Proteina>
      </div>
      <div id='quemador'>
      <Quemador></Quemador>
      </div>
      <div id= 'carrito'>
      <ProductoDisponible></ProductoDisponible>
      <Carrito></Carrito>
      </div>
      <footer id='contacto' style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <div>
          <h4>Contacto</h4>
          <p>Teléfono: <a href="tel:+5491139050309" style={{ color: '#fff' }}>+54 9 11 3905-0309</a></p>
          <p>Email: <a href="mailto:info@gymfit.com" style={{ color: '#fff' }}>info@gymfit.com</a></p>
          <p>Ubicación: Av. Avellaneda 511, Buenos Aires, Argentina</p>
          <p>Síguenos en Instagram: <a href="https://www.instagram.com/gymfitoficial" style={{ color: '#fff' }}>@gymfitoficial</a></p>
        </div>
        <div style={{ marginTop: '20px' }}>
          <p>&copy; 2024 Suplementos Gym. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
    
  );
}

export default App;