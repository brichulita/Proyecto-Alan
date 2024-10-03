
import './App.css';
import BasicExample from './Componentes/navbar';
import UncontrolledExample from './Componentes/carousel';
import Accesorios from './Componentes/carouselaccesorios';
import Colageno from './Componentes/carouselcolageno';
import Creatina from './Componentes/carouselcraetina';
import Proteina from './Componentes/carouselprote';
import Quemador from './Componentes/carouselquema';
function App() {
  return (
    <div className="App">
      <BasicExample></BasicExample>
      <UncontrolledExample></UncontrolledExample>
      <Accesorios></Accesorios>
      <Colageno></Colageno>
      <Creatina></Creatina>
      <Proteina></Proteina>
      <Quemador></Quemador>

    </div>
  );
}

export default App;
