import { Grid, Box, Typography, Avatar, Divider } from '@mui/material';
import portrait from "../../assets/cardimages/Me.jpg";
import React, { useEffect } from 'react';


export const MyBio = () => {
  useEffect(() => {
    // Save the original styles
    const originalStyle = window.getComputedStyle(document.body).overflow;

    // Disable scrolling when the component mounts
    document.body.style.overflow = 'hidden';
    // document.body.style.height = '100vh';

    return () => {
      // Restore the original styles when the component unmounts
      document.body.style.overflow = originalStyle;
      document.body.style.height = 'auto';
    };
  }, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '80vh' }} // Make the Grid fill the viewport height
    >
      <Avatar
        alt="Angel Beltran"
        src={portrait}
        sx={{
          width: 500,
          height: 500,
          clipPath: 'polygon(50% 0%, 90% 20%, 90% 80%, 50% 100%, 10% 80%, 10% 20%)',
          marginLeft: '50px', // Adjust this value to move the avatar more to the left
          padding: '0 20px', // Add padding to the left and right of the avatar
        }}
      />
 <Box sx={{ height: '50vh', display: 'flex', alignItems: 'center' }}>
  <Divider
    orientation="vertical"
    flexItem
    style={{ margin: '0 20px' }} // Add margin to create space around the line
  />
</Box>
      <Box
        sx={{
          width: '600px', // Increase this value to make the box wider
          textAlign: 'center', // Center the text
          padding: '0 20px', // Add padding to the left and right of the typography

        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Full Stack Developer
        </Typography>
        <Typography variant="body1">
          My name is Angel and I am a novice Full Stack Developer. I am a full time
          explorer and traveller. I love being in the uncharted and make new experiences and memories. In my free time I go to the
          gym, binge/watch movies and TV shows. Been playing video games since i could walk and is key in helping escape reality every now and then. I
          decided to purse the realm of development to make a difference in my community and to launch projects of my own! I have experience in HTML, CSS,
          JavaScript, Node.js, Express.js, SQL, and React. I am currently working on several projects that will help me gain more
          experience in the field. I am excited to see and share my journey with you all!
        </Typography>
      </Box>
    </Grid>
  );
}