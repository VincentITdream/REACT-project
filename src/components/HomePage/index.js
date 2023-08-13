import React from 'react';
import { Container, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h5" style={{ fontFamily: 'cursive', fontSize: '34px', marginBottom: '20px' }}>
        Welcome to Cat Lovers' Haven
      </Typography>
      <img
        src="https://cataas.com/cat/says/hello"
        alt="Cat saying hello"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <Typography variant="h5" style={{ fontFamily: 'cursive', fontSize: '24px', marginBottom: '20px' }}>
        This website is designed for cat lovers or someone is ready to falling in love with cats.
      </Typography>
      <Link to="/display">
        <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Let's see some cats
        </Button>
      </Link>
    </Container>
  );
};

export default HomePage;