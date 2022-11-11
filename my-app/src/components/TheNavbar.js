import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TheNavbar() {
  return ( 
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="#home">Kims favorite recipes</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#features">Browse</Nav.Link>
        <Nav.Link href="#pricing">Add new recipe</Nav.Link>
        <NavDropdown title="Welcome, Kim" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Profile Data</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            My recipes
          </NavDropdown.Item>
          
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">Login</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Register
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>);
}

export default TheNavbar;

