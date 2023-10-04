import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container, Navbar, Nav, Card } from 'react-bootstrap';
import a from "./images/asus.PNG"
import b from "./images/razer.PNG"
import c from "./images/mac1.PNG"

function App() {
  const imageStyle = {
    width: '110px',
    height: '80px'
  };

  return (
    <React.Fragment>
      <div className="App">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="mt-3">
          <h1>Titre de l'application</h1>

          <Card>
            <img src={a} style={imageStyle} alt="ASUS" />
            <Card.Body>
              <Card.Title>ASUS</Card.Title>
              <Card.Text>
                ASUS ROG STRIK G15
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <img src={c} style={imageStyle} alt="Apple" />
            <Card.Body>
              <Card.Title>Apple</Card.Title>
              <Card.Text>
                Mac-book air
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <img src={b} style={imageStyle} alt="Razer" />
            <Card.Body>
              <Card.Title>Razer</Card.Title>
              <Card.Text>
                Acer Razer v16
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default App;
