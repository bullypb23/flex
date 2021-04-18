import React, { useState } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Map from '../components/map';
import { Box, Typography, TextField, Button, TextareaAutosize } from '@material-ui/core';
import logo from '../images/logo-transparent.png'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = () => {
    console.log(name, email, message);
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <Box className="map-wrapper">
        <Box style={{ flex: '1 1 50%' }}>
          <Typography style={{ fontSize: '2rem' }}>Have any question? Ask us anything</Typography>
          <Box>
            <Box className="form-control-container">
              <TextField label="Name" className="input" value={name} onChange={(event) => setName(event.target.value)} />
            </Box>
            <Box className="form-control-container">
              <TextField label="Email" className="input" value={email} onChange={(event) => setEmail(event.target.value)} />
            </Box>
            <Box className="form-control-container">
              <TextareaAutosize
                style={{ padding: '5px' }}
                placeholder="Message"
                className="input textarea"
                rowsMin={3}
                onChange={(event) => setMessage(event.target.value)}
                value={message}
              />
            </Box>
            <Box className="form-control-container">
              <Button
                style={{ backgroundColor: '#055793', color: '#fff' }}
                variant="contained"
                onClick={handleFormSubmit}
              >
                Send message
              </Button>
            </Box>
          </Box>
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
