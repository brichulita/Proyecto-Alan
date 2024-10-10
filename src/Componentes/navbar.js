import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg" className="fixed-top" >
      <Container>
        <Navbar.Brand href="#home">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#accesorios">Accesorios</NavDropdown.Item> 
              <NavDropdown.Item href="#colageno">
                Colágeno
              </NavDropdown.Item>
              <NavDropdown.Item href="#proteina">Proteína</NavDropdown.Item>
              <NavDropdown.Item href="#creatina">
                Creatina
              </NavDropdown.Item>
              <NavDropdown.Item href="#quemador">Quemador de grasa</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link href="#carrito">Carrito de compras </Nav.Link>
              </Container>
    </Navbar>
  );
}

export default BasicExample;