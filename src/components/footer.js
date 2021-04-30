import React from 'react';
import { Box, Typography } from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <Box className="footer">
      <Box className="footer-container">
        <Box className="footer-info">
          <Box>
            <StaticImage src="../images/logo-transparent.png" alt="Flex Moving Logo" width={100} />
          </Box>
          <Box className="footer-company">
            <Typography className="footer-paragraph">Flex Moving Company NYC</Typography>
            <Typography className="footer-paragraph">Email: zackflexmoving@gmail.com</Typography>
            <Typography className="footer-paragraph">Address: 21-48 35th Street, 11105 Astoria NY</Typography>
            <Typography className="footer-paragraph">Phone: <a href="tel:+4258704368">425-870-4368</a></Typography>
          </Box>
        </Box>
        <Box>
          <Box>
            <Link to="/" className="active">- Home</Link>
          </Box>
          <Box>
            <Link to="/our-story" className="active">- Our story</Link>
          </Box>
          <Box>
            <Typography style={{ color: '#fff' }}>- Moving services</Typography>
            <Box style={{ paddingLeft: '10px' }} className="footer-nav">
              <Link to="/moving-services/local" className="footer-links active">Local</Link>
              <Link to="/moving-services/commercial" className="footer-links active">Commercial</Link>
              <Link to="/moving-services/long-distance" className="footer-links active">Long distance</Link>
              <Link to="/moving-services/storage" className="footer-links active">Storage</Link>
            </Box>
          </Box>
          <Box>
            <Link to="/contact" className="active">- Contact</Link>
          </Box>
        </Box>
      </Box>
      <Box className="footer-copyright">
        <Typography style={{ fontSize: '0.8rem' }}>Copyright Flex Moving NYC© - {new Date().getFullYear()}</Typography>
      </Box>
    </Box>
  )
}

export default Footer;
