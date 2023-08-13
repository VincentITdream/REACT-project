import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AdoptPage = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '50px', textAlign: 'center' ,backgroundColor: 'skyblue' }}>
      <Typography variant="h2" gutterBottom style={{ fontFamily: 'cursive' }}>
        Adopting a Cat is Much Better Than Purchasing
      </Typography>
      
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="body1" paragraph style={{ fontFamily: 'cursive', marginBottom: '20px' }}>
        I wish to share my story with my lovely cat Doupi. 
        I have a lovely cat called Doupi and he is almost 5 years old now. We found his formal owner was trying to find him a new home around 2020 when the COVID hits.
        His formal owner is an overseas student and they have to back to their country when the COVID happened. 
        They can't take Doupi with them because Doupi is a short nose cat. They can't breath on flights and not to mention that special timing. 
        I pretty sure his previous owner is also loved him but in this special occasion they got no choice.
        Me and my wife are both really want to have a cat to stay with us so we so happy to adopt him in our home. 
        Since he lived with us, he never bite or scracth on us. He likes to sleep besides us on the bed and will like to wake us up in the morning.
        My wife is a bit scare to animals but after meeting Doupi. She no longer afraid of animals now.
        We hope you will consider to adopt a cat instead purchasing it. But we know sometimes it is not that easy to adopt a cat so if you really love cat or a specific breed. You can still purchase it.
        Please consider and reconsider before you decided to have a cat. They really hate moving home and changing owners.
        Some cats will even die because they don't get use to the new environment. I have attached some cute photos for Doupi. Hope you would met a cute cat like him in your life! 

        </Typography>
        <Box display="flex" justifyContent="center">
          <Box style={{ flex: 1 }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <img src="/doupi1.jpg" alt="Cat" style={{ width: '100%', marginBottom: '10px' }} />
              <img src="/doupi3.jpg" alt="Cat" style={{ width: '100%', marginBottom: '10px' }} />
              <img src="/doupi5.jpg" alt="Cat" style={{ width: '100%', marginBottom: '10px' }} />
            </Box>
          </Box>
          <Box style={{ flex: 1 }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <img src="/doupi2.jpg" alt="Cat" style={{ width: '100%', marginBottom: '10px' }} />
              <img src="/doupi4.jpg" alt="Cat" style={{ width: '100%', marginBottom: '10px' }} />
              <img src="/doupi6.jpg" alt="Cat" style={{ width: '100%', marginBottom: '10px' }} />
            </Box>
          </Box>
        </Box>
        <Typography variant="h2" paragraph style={{ fontFamily: 'cursive' }}>
          For more information about adopting a cat or kitten, visit{' '}
          <a href="https://www.rspca.org.au/adopt-pet/adopting-catkitten" target="_blank" rel="noopener noreferrer">
            RSPCA's adoption page
          </a>.
        </Typography>
      </Box>
    </Container>
  );
};

export default AdoptPage;