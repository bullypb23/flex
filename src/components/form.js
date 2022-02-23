import React, { useState } from 'react';
import { Box, TextField, TextareaAutosize, Button, Typography, InputLabel } from '@material-ui/core';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import Spinner from './spinner';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isValidForm, setIsValidForm] = useState(true);
  const [sending, setSending] = useState(false);
  const [movingFromZipCode, setMovingFromZipCode] = useState();
  const [movingToZipCode, setMovingToZipCode] = useState();
  const [phone, setPhone] = useState('');
  const [apartmentSize, setApartmentSize] = useState();

  const validateEmail = (emailValue) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailValue).toLowerCase());
  }

  const handleFormSubmit = () => {
    if (!name || !message || !validateEmail(email) || !phone || !movingFromZipCode || !movingToZipCode || !apartmentSize) {
      setIsValidForm(false);
      return;
    } else {
      setIsValidForm(true);
      setSending(true);
      emailjs.send(process.env.GATSBY_EMAIL_PROVIDER, process.env.GATSBY_EMAIL_NAME, {
        name: name,
        email: email,
        message: message,
      }, process.env.GATSBY_EMAIL_ID)
        .then(response => {
          toast.info('Email is successfuly sent!');
          setEmail('');
          setName('');
          setMessage('');
        })
        .catch(error => {
          toast.error('Something went wrong with sending email! Please try again!');
        })
        .finally(res => {
          setSending(false);
        })
    }
  }

  return (
    <Box className="form-wrapper">
      <Box className="form-control-container">
        <Box component="span">Moving From:</Box>
        <Box>
          <InputLabel htmlFor="movingFrom" style={{ fontSize: 12 }}>
            Enter ZIP Code
          </InputLabel>
          <TextField
            className="input small"
            variant="outlined"
            value={movingFromZipCode}
            onChange={(event) => setMovingFromZipCode(event.target.value)}
            size="small"
            id="movingFrom"
          />
        </Box>
      </Box>
      <Box className="form-control-container">
        <Box component="span">Moving To:</Box>
        <Box>
          <InputLabel htmlFor="movingTo" style={{ fontSize: 12 }}>
            Enter ZIP Code
          </InputLabel>
          <TextField
            className="input small"
            variant="outlined"
            value={movingToZipCode}
            onChange={(event) => setMovingToZipCode(event.target.value)}
            size="small"
            id="movingTo"
          />
        </Box>
      </Box>
      <Box className="form-control-radio-container">
        <Box component="span">Appartment/house size</Box>
        <Box className="form-control-radio">
          <Box className={`radio ${apartmentSize === '<1' && 'radio-selected'}`} onClick={() => setApartmentSize('<1')}>&lt;1</Box>
          <Box className={`radio ${apartmentSize === '1' && 'radio-selected'}`} onClick={() => setApartmentSize('1')}>1</Box>
          <Box className={`radio ${apartmentSize === '2' && 'radio-selected'}`} onClick={() => setApartmentSize('2')}>2</Box>
          <Box className={`radio ${apartmentSize === '3' && 'radio-selected'}`} onClick={() => setApartmentSize('3')}>3</Box>
          <Box className={`radio ${apartmentSize === '4' && 'radio-selected'}`} onClick={() => setApartmentSize('4')}>4</Box>
          <Box className={`radio ${apartmentSize === '4>' && 'radio-selected'}`} onClick={() => setApartmentSize('4>')}>4&gt;</Box>
        </Box>
        {/* <TextField label="Name" className="input" value={name} onChange={(event) => setName(event.target.value)} size="small" /> */}
      </Box>
      <Box className="form-control-container center">
        <Box component="span">Name:</Box>
        <Box>
          <TextField
            className="input small"
            variant="outlined"
            value={name}
            onChange={(event) => setName(event.target.value)}
            size="small"
          />
        </Box>
      </Box>
      <Box className="form-control-container center">
        <Box component="span">Phone number:</Box>
        <Box>
          <TextField
            className="input small"
            variant="outlined"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            size="small"
          />
        </Box>
      </Box>
      <Box className="form-control-container center">
        <Box component="span">Email:</Box>
        <Box>
          <TextField
            className="input small"
            variant="outlined"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            size="small"
          />
        </Box>
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
      {!isValidForm && <Typography className="invalid-paragraph">Form is not valid! Check all fields!</Typography>}
      <Box className="form-control-container" style={{ justifyContent: 'center' }}>
        <Button
          style={{ backgroundColor: '#CAE265', color: '#444', borderRadius: '20px', minWidth: 200 }}
          variant="contained"
          onClick={handleFormSubmit}
        >
          Get Quote
        </Button>
      </Box>
      {sending && <Spinner />}
    </Box>
  )
}

export default Form;
