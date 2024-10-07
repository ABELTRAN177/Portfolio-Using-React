import { Grid2 as Grid, Typography, Avatar, Box } from "@mui/material";
import portrait from "../../assets/cardimages/Me.jpg";

export const MyBio = () => {
    return (
<Grid
  container
  direction="row"
  justifyContent="flex-start"
  alignItems="center"
  spacing={2}
  sx={{
    minHeight: "750px",
    paddingTop: "50px", 
    paddingBottom: "190px",
    background:"#D3DCC2"
  }}
>
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  sx={{
    marginTop: '100px', // Adjust this value to shift the avatar downward
  }}
>
  <Avatar
    alt="Angel Beltran"
    src={portrait}
    sx={{ 
      width: 500, // Adjust the size here
      height: 500, // Adjust the size here
      clipPath: 'polygon(50% 0%, 90% 20%, 90% 80%, 50% 100%, 10% 80%, 10% 20%)',
      marginLeft: '150px', // Adjust this value to shift the avatar to the right
    }}
  />
</Grid>
<Grid
  item
  md={8}
  display="flex"
  flexDirection="column"
  justifyContent="center"
  alignItems="flex-start"
  sx={{
    marginTop: '-200px', // Adjust this value to shift the typography upward
  }}
>
<Box  
  sx={{ 
    marginTop: '400px', // Adjust this value to shift the typography upward
    width: '600px', // Increase this value to make the box wider
    height: '500px', // Set the height of the box
    justifyContent: 'center', // Center the content horizontally
    marginLeft: '300px', // Add space to the left of the box
  }} 
>
  <Typography variant="h3" component="h1" gutterBottom>
    Angel Beltran
  </Typography>
  <Typography variant="h5" component="h2" gutterBottom>
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
</Grid>
      
      );
    };