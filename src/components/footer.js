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
            <Typography className="footer-paragraph">Phone: 425-870-4368</Typography>
          </Box>
        </Box>
        <Box>
          <Box>
            <Link to="/">- Home</Link>
          </Box>
          <Box>
            <Link to="/our-story">- Our story</Link>
          </Box>
          <Box>
            <Typography style={{ color: '#fff' }}>- Moving services</Typography>
            <Box style={{ paddingLeft: '10px' }}>
              <Link to="/moving-services/local" className="footer-links">Local</Link>
              <Link to="/moving-services/commercial" className="footer-links">Commercial</Link>
              <Link to="/moving-services/long-distance" className="footer-links">Long distance</Link>
              <Link to="/moving-services/storage" className="footer-links">Storage</Link>
            </Box>
          </Box>
          <Box>
            <Link to="/contact">- Contact</Link>
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
