import { Grid2 as Grid, Typography, Avatar } from "@mui/material";
import portrait from "../../assets/cardimages/Me.jpg";

export const MyBio = () => {
    return (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{
            minHeight: "750px",
            paddingTop: "50px", 
            paddingBottom: "175px",
            background:"#CED3DC"
          }}
        >
          <Grid
            size={{ xs: 12, md: 5 }}
            display="flex"
            justifyContent="center"
            alignItems={"center"}
          >
    
            <Avatar
              alt="Angel Beltran"
              src={portrait}
              sx={{ width: 400, height: 400 }}
            />
          </Grid>
          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{ paddingRight: "20px", paddingLeft: "20px" }}
          >
            <Grid display="flex" justifyContent="center">
              <Typography variant="h3" component="h1" gutterBottom>
                Angel Beltran
              </Typography>
            </Grid>
            <Grid display="flex" justifyContent="center">
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                style={{ fontWeight: "bold", paddingBottom: "10px" }}
              >
                Full-Stack Developer
              </Typography>
            </Grid>
            <Typography variant="body1">
            My name is Angel and I am a novice Full Stack Developer. I am a full time
            explorer and traveller. I love being in the uncharted and make new experiences and memories. In my free time I go to the
            gym, binge/watch movies and TV shows. Been playing video games since i could walk and is key in helping escape reality every now and then. I
            decided to purse the realm of development to make a difference in my community and to launch projects of my own! I have experience in HTML, CSS,
            JavaScript, Node.js, Express.js, SQL, and React. I am currently working on several projects that will help me gain more
            experience in the field. I am excited to see and share my journey with you all!
            </Typography>
          </Grid>
        </Grid>
      );
    };