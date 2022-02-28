import React from 'react';
import { Box, Typography, Button } from "@material-ui/core";
import { Link } from "gatsby";
import Map from "./map";
import logo from "../images/logo-removebg-preview.png";
import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";
import { MdMailOutline } from "@react-icons/all-files/md/MdMailOutline";

const Footer = () => {
  return (
    <Box className="footer">
      <Box className="footer-container">
        <Box className="footer-info">
          <Box>
            <img src={logo} alt="Flex Moving Logo" width={130} />
          </Box>
          <Typography className="footer-paragraph">Address: 21-48 35th Street, Astoria, NY 11105</Typography>
          <Typography className="footer-paragraph">Phone: <a href="tel:(929) 699-3370">(929) 699-3370</a></Typography>
          <Typography className="footer-paragraph" >Email: <a href="mailto:flexmovingnyc@gmail.com">flexmovingnyc@gmail.com</a></Typography>
          <Typography className="footer-paragraph" style={{ paddingTop: '15px' }}>Hours</Typography>
          <Box style={{ padding: '0 10px' }}>
            <Typography className="footer-paragraph">Monday: 9AM - 7PM</Typography>
            <Typography className="footer-paragraph">Tuesday: 9AM - 7PM</Typography>
            <Typography className="footer-paragraph">Wednesday: 9AM - 7PM</Typography>
            <Typography className="footer-paragraph">Thursday: 9AM - 7PM</Typography>
            <Typography className="footer-paragraph">Friday: 9AM - 7PM</Typography>
            <Typography className="footer-paragraph">Saturday: 9AM - 5PM</Typography>
            <Typography className="footer-paragraph">Sunday Closed</Typography>
          </Box>
        </Box>
        {/* <Box className="footer-links-container">
          <Box>
            <Link to="/" className="active">Home</Link>
          </Box>
          <Box>
            <Typography style={{ color: '#455A64' }}>Moving services</Typography>
            <Box style={{ paddingLeft: '10px' }} className="footer-nav">
              <Link to="/moving-services/local" className="footer-links active">Local</Link>
              <Link to="/moving-services/commercial" className="footer-links active">Commercial</Link>
              <Link to="/moving-services/long-distance" className="footer-links active">Long distance</Link>
              <Link to="/moving-services/storage" className="footer-links active">Storage</Link>
              <Link to="/moving-services/packing" className="footer-links active">Packing and unpacking</Link>
            </Box>
          </Box>
          <Box>
            <Link to="/contact" className="active">Contact</Link>
          </Box>
        </Box> */}
        <Box className="footer-map">
          <Map mapWidth={350} />
        </Box>
      </Box>
      <Box className="footer-links-wrapper">
        <Box>
          <Button
            style={{ backgroundColor: '#CAE265', color: '#444', borderRadius: '20px', minWidth: 200 }}
            variant="contained"
          >
            Free Quote
          </Button>
        </Box>
        <Box className="footer-info-links">
          <Typography className="footer-link">
            <a href="tel:(929) 699-3370">
              <FaPhoneSquareAlt style={{ marginRight: '10px' }} />
              (929) 699-3370
            </a>
          </Typography>
          <Typography className="footer-link">
            <a href="mailto:flexmovingnyc@gmail.com">
              <MdMailOutline style={{ marginRight: '10px' }} />
              flexmovingnyc@gmail.com
            </a>
          </Typography>
        </Box>
      </Box>
      <Box className="footer-copyright">
        <Typography style={{ fontSize: '0.8rem', textAlign: 'center', paddingRight: '10px', fontWeight: 'bold' }}>USDOT #3610638</Typography>
        <Typography style={{ fontSize: '0.8rem', textAlign: 'center', paddingRight: '10px', fontWeight: 'bold' }}>MC #1229716</Typography>
        <Typography style={{ fontSize: '0.8rem', textAlign: 'center', paddingRight: '10px', fontWeight: 'bold' }}>NYSDOT #T-41192</Typography>
        <Typography style={{ fontSize: '0.8rem', textAlign: 'center', paddingRight: '10px', fontWeight: 'bold' }}>Copyright Flex Moving NYC© - {new Date().getFullYear()}</Typography>
      </Box>
    </Box>
  )
}

export default Footer;
