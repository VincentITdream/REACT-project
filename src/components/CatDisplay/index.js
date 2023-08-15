import React, { useState, useEffect } from 'react';
import { Container, Button, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CatDisplay = () => {
  const [catImage, setCatImage] = useState('');
  const [catBreed, setCatBreed] = useState('');
  const [breedDescription, setBreedDescription] = useState('');

  const fetchCatData = (breedId) => {
    const apiKey = process.env.REACT_APP_CAT_API_KEY; 
    const breedImageApiUrl = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${apiKey}`;

    fetch(breedImageApiUrl)
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          setCatImage(data[0].url);
        }
      })
      .catch(error => {
        console.error('Error fetching cat image:', error);
      });
  };

  const fetchRandomBreed = () => {
    const apiKey = process.env.REACT_APP_CAT_API_KEY; 
    const breedsApiUrl = `https://api.thecatapi.com/v1/breeds?api_key=${apiKey}`;

    fetch(breedsApiUrl)
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          const randomBreed = data[Math.floor(Math.random() * data.length)];
          setCatBreed(randomBreed.name);
          setBreedDescription(randomBreed.description);
          fetchCatData(randomBreed.id);
        }
      })
      .catch(error => {
        console.error('Error fetching cat breed:', error);
      });
  };

  useEffect(() => {
    fetchRandomBreed();
    // eslint-disable-next-line
  }, []); 

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      <img src={catImage} alt="Cat" style={{ maxWidth: '100%', height: 'auto' }} />
      <div>
        <Card style={{ marginTop: '20px' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Breed: {catBreed}
            </Typography>
            <Typography variant="body2">{breedDescription}</Typography>
          </CardContent>
        </Card>
        <Link to="/adopt" onKeyDown={(event) => event.key === 'Enter' && event.currentTarget.click()}>
        <Button variant="contained" color="primary" style={{ marginTop: '20px', marginRight: '20px' }}>
          I like this one! 
        </Button>
      </Link>
        <Button
          variant="contained"
          color="secondary"
          style={{ marginTop: '20px' }}
          onClick={fetchRandomBreed} 
        >
          Next Cat
        </Button>
      </div>
    </Container>
  );
};

export default CatDisplay;