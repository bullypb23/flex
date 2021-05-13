import React from 'react';
import { Box, Typography } from "@material-ui/core";
import { Link } from "gatsby";
import Map from "./map";
import logo from "../images/logo-transparent.png"

const Footer = () => {
  return (
    <Box className="footer">
      <Box className="footer-container">
        <Box className="footer-info">
          <Box>
            <img src={logo} alt="Flex Moving Logo" width={100} />
          </Box>
          <Typography className="footer-paragraph">Flex Moving Company NYC</Typography>
          <Typography className="footer-paragraph">Email: zarkoflexmoving@gmail.com</Typography>
          <Typography className="footer-paragraph">Address: 21-48 35th Street, 11105 Astoria NY</Typography>
          <Typography className="footer-paragraph">Phone: <a href="tel:(425) 870-4368">(425) 870-4368</a></Typography>
          <Typography className="footer-paragraph">Working hours: Mon-Fri: 9AM - 7PM, Sat: 9AM - 5PM, Sun: Closed</Typography>
        </Box>
        <Box className="footer-links-container">
          <Box>
            <Link to="/" className="active">Home</Link>
          </Box>
          <Box>
            <Typography style={{ color: '#fff' }}>Moving services</Typography>
            <Box style={{ paddingLeft: '10px' }} className="footer-nav">
              <Link to="/moving-services/local" className="footer-links active">Local</Link>
              <Link to="/moving-services/commercial" className="footer-links active">Commercial</Link>
              <Link to="/moving-services/long-distance" className="footer-links active">Long distance</Link>
              <Link to="/moving-services/storage" className="footer-links active">Storage</Link>
              <Link to="/moving-services/packing" className="footer-links active">Packing ad unpacking</Link>
            </Box>
          </Box>
          <Box>
            <Link to="/contact" className="active">Contact</Link>
          </Box>
        </Box>
        <Box className="footer-map">
          <Map mapWidth={280} />
        </Box>
      </Box>
      <Box className="footer-copyright">
        <Typography style={{ fontSize: '0.8rem', textAlign: 'center' }}>Copyright Flex Moving NYC© - {new Date().getFullYear()}</Typography>
      </Box>
    </Box>
  )
}

export default Footer;
