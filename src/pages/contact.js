import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Map from '../components/map';
import Form from '../components/form';
import { Box, Typography } from '@material-ui/core';
import logo from '../images/logo-transparent.png';
import useWindowSize from '../utils/useWindowSize';
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { FaAt } from "@react-icons/all-files/fa/FaAt";
import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";
import { FaClock } from "@react-icons/all-files/fa/FaClock";

const Contact = () => {
  const { width } = useWindowSize();

  return (
    <Layout>
      <SEO title="Contact" />
      <Box className='map-wrapper'>
        <Box style={{ flex: '1 1 40%', padding: '0 10px' }}>
          <Typography style={{ fontSize: '2rem' }} className='contact-header'>Have any question? Ask us anything</Typography>
          <Form />
        </Box>
        <Box style={{ flex: '1 1 60%', flexWrap: 'wrap' }}>
          <Map mapWidth={350} />
          <Box>
            <Box>
              <img src={logo} alt="Flex Moving Logo" style={{ width: '100px', paddingLeft: width < 768 ? '10px' : 0 }} />
            </Box>
            <Box className='contact-content'>
              <Typography>Flex Moving Company</Typography>
              <Typography><FaMapMarkerAlt style={{ marginRight: '5px' }} />21-48 35th Street, 11105 Astoria NY</Typography>
              <Typography><FaAt style={{ marginRight: '5px' }} /><a href="mailto:flexmovingnyc@gmail.com" style={{ color: '#055793', textDecoration: 'underline' }}>flexmovingnyc@gmail.com</a></Typography>
              <Typography>
                <a className="contact-phone-link" href="tel:+(425) 870-4368"><FaPhoneSquareAlt style={{ marginRight: '5px' }} />(425) 870-4368</a>
              </Typography>
              <Typography><FaClock style={{ marginRight: '5px' }} />Working hours: Mon-Fri: 9AM - 7PM, Sat: 9AM - 5PM, Sun: Closed</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default Contact;
