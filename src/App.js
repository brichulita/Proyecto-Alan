
import './App.css';
import BasicExample from './Componentes/navbar';
import UncontrolledExample from './Componentes/carousel';
import Accesorios from './Componentes/carouselaccesorios';
function App() {
  return (
    <div className="App">
      <BasicExample></BasicExample>
      <UncontrolledExample></UncontrolledExample>
      <Accesorios></Accesorios>
    </div>
  );
}

export default App;
