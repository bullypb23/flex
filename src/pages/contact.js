import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Map from '../components/map';
import Form from '../components/form';
import { Box, Typography } from '@material-ui/core';
import logo from '../images/logo-transparent.png'

const Contact = () => {

  return (
    <Layout>
      <SEO title="Contact" />
      <Box className="map-wrapper">
        <Box style={{ flex: '1 1 50%' }}>
          <Typography style={{ fontSize: '2rem' }}>Have any question? Ask us anything</Typography>
          <Form />
        </Box>
        <Box style={{ flex: '1 1 50%' }}>
          <Map />
          <Box>
            <img src={logo} alt="Flex Moving Logo" style={{ width: '100px' }} />
          </Box>
          <Box>
            <Typography>Flex Moving Company</Typography>
            <Typography>21-48 35th Street, 11105 Astoria NY</Typography>
            <Typography><a href="mailto:zackflexmoving@gmail.com" style={{ color: '#055793', textDecoration: 'underline' }}>zackflexmoving@gmail.com</a></Typography>
            <Typography>425-870-4368</Typography>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default Contact;
