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

const Contact = () => {
  const { width } = useWindowSize();

  return (
    <Layout>
      <SEO title="Contact" />
      <Box className='map-wrapper'>
        <Box style={{ flex: '1 1 50%' }}>
          <Typography style={{ fontSize: '2rem' }} className='contact-header'>Have any question? Ask us anything</Typography>
          <Form />
        </Box>
        <Box style={{ flex: '1 1 50%' }}>
          <Map />
          <Box>
            <img src={logo} alt="Flex Moving Logo" style={{ width: '100px', paddingLeft: width < 768 ? '10px' : 0 }} />
          </Box>
          <Box className='contact-content'>
            <Typography>Flex Moving Company</Typography>
            <Typography><FaMapMarkerAlt style={{ marginRight: '5px' }} />21-48 35th Street, 11105 Astoria NY</Typography>
            <Typography><FaAt style={{ marginRight: '5px' }} /><a href="mailto:zackflexmoving@gmail.com" style={{ color: '#055793', textDecoration: 'underline' }}>zackflexmoving@gmail.com</a></Typography>
            <Typography><FaPhoneSquareAlt style={{ marginRight: '5px' }} />425-870-4368</Typography>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default Contact;
