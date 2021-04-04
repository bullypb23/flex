import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Row, Navbar, Nav, Container } from "react-bootstrap";
import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";

const Header = () => (
  <Navbar variant="light" expand="md" id="navbar" sticky="top">
    <Container fluid="xl" className="header-container">
      <Link to="/" style={{ margin: '0 20px' }}>
        <Navbar.Brand>
          <StaticImage src="../images/logo.jpg" alt="Flex Moving Logo" width={90} />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <div className="navbar-container">
          <Row className="icon-wrapper">
            <FaPhoneSquareAlt style={{ fontSize: '28px', marginRight: '20px' }} />212-212-212
          </Row>
          <Row>
            <Nav className="links-wrapper">
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
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
