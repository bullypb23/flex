import React, { useState } from 'react';
import { Box, TextField, TextareaAutosize, Button, Typography } from '@material-ui/core';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import Spinner from './spinner';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isValidForm, setIsValidForm] = useState(true);
  const [sending, setSending] = useState(false);

  const validateEmail = (emailValue) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailValue).toLowerCase());
  }

  const handleFormSubmit = () => {
    if (name === '' || message === '' || !validateEmail(email)) {
      setIsValidForm(false);
      return;
    } else {
      setIsValidForm(true);
      setSending(true);
      emailjs.send('gmail', 'flex-moving', {
        name: name,
        email: email,
        message: message,
      }, 'user_xiOAGWe7JXz0AAssd5bdQ')
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
      {!isValidForm && <Typography className="invalid-paragraph">Form is not valid! Check all fields!</Typography>}
      <Box className="form-control-container">
        <Button
          style={{ backgroundColor: '#055793', color: '#fff' }}
          variant="contained"
          onClick={handleFormSubmit}
        >
          Send message
        </Button>
      </Box>
      {sending && <Spinner />}
    </Box>
  )
}

export default Form;
