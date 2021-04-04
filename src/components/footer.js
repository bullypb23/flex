import React from 'react';
import { Box } from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <Box className="footer">
      <Box>
        <Box>
          <StaticImage src="../images/logo.jpg" alt="Flex Moving Logo" width={100} />
        </Box>
        <Box>
          <Box>
            <Link to="/">Home</Link>
          </Box>
          <Box>
            <Link to="/our-story">Our story</Link>
          </Box>
          <Box>
            <Link to="/moving-services">Moving services</Link>
          </Box>
          <Box>
            <Link to="/contact">Contact</Link>
          </Box>
        </Box>
      </Box>
      <Box>

      </Box>
    </Box>
  )
}

export default Footer;
