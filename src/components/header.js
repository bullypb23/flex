import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Row, Container, Navbar, Nav } from "react-bootstrap";
import PhoneIcon from '@material-ui/icons/Phone';

const Header = () => (
  <Navbar variant="light" expand="lg" id="navbar">
    <Container className="container">
      <Link to="/">
        <Navbar.Brand>
          <StaticImage src="../images/logo.jpg" alt="Flex Moving Logo" width={90} />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Container className="navbar-container">
          <Row>
            <PhoneIcon />Phone number
          </Row>
          <Row>
            <Nav>
              <Link to="/" className="link-items">
                <Nav.Item>
                  Home
                </Nav.Item>
              </Link>
              <Link to="/our-story" className="link-items">
                <Nav.Item>
                  Our story
                </Nav.Item>
              </Link>
              <Link to="/moving-services" className="link-items">
                <Nav.Item>
                  Moving services
                </Nav.Item>
              </Link>
              <Link to="/contact" className="link-items">
                <Nav.Item>
                  Contact
                </Nav.Item>
              </Link>
            </Nav>
          </Row>
        </Container>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
