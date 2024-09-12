import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Contacto</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Accesorios</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Colágeno
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Proteína</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Creatina
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Quemador de grasa</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
              </Container>
    </Navbar>
  );
}

export default BasicExample;