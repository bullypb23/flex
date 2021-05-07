import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";
import { Box } from '@material-ui/core';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, Container, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaStoreAlt } from "@react-icons/all-files/fa/FaStoreAlt";
import { FaFlagUsa } from "@react-icons/all-files/fa/FaFlagUsa";
import { FaWarehouse } from "@react-icons/all-files/fa/FaWarehouse";
import { FaBox } from "@react-icons/all-files/fa/FaBox";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <Navbar expand="md" id="navbar" style={{ padding: '5px 0 0 0' }}>
      <Container fluid className="header-container">
        <Box style={{ flex: '1 1 100%', textAlign: 'right', paddingRight: '10px' }}>
          <a href="tel:+4258704368" style={{ color: '#000', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <FaPhoneSquareAlt style={{ marginRight: '10px' }} />425-870-4368
          </a>
        </Box>
        <Box className="nav-wrapper">
          <Box>
            <Link to="/" style={{ margin: '0 20px' }}>
              <StaticImage src="../images/logo.jpg" alt="Flex Moving Logo" width={70} style={{ top: '-10px' }} />
            </Link>
          </Box>
          <Box>
            <NavbarToggler onClick={() => setOpen(!open)} />
          </Box>
          <Collapse navbar isOpen={open} className="navbar-container">
            <Nav navbar>
              <NavItem>
                <Link to="/" className="link-items">Home</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{ color: '#000', textTransform: 'uppercase' }}>
                  Moving services
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={Link} to="/moving-services/local" className="dropdown-item">
                    <FaHome style={{ marginRight: '5px' }} />
                    Local
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/moving-services/commercial" className="dropdown-item">
                    <FaStoreAlt style={{ marginRight: '5px' }} />
                    Commercial
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/moving-services/long-distance" className="dropdown-item">
                    <FaFlagUsa style={{ marginRight: '5px' }} />
                    Long distance
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/moving-services/storage" className="dropdown-item">
                    <FaWarehouse style={{ marginRight: '5px' }} />
                    Storage
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/moving-services/packing" className="dropdown-item">
                    <FaBox style={{ marginRight: '5px' }} />
                    Packing and unpacking
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link to="/contact" className="link-items">Contact</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Box>
      </Container>
    </Navbar>
  )
}

export default Header;
