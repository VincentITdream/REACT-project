import { Container, Button } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      <img
        src="https://cataas.com/cat/says/hello"
        alt="Cat saying hello"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Let's see some cats
      </Button>
    </Container>
  );
};

export default HomePage;