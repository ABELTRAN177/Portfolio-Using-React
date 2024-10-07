import { Grid2 as Grid, Card, CardContent, CardMedia, Typography, CardActions, IconButton } from "@mui/material";
import  GitHubIcon  from "@mui/icons-material/GitHub";
import PropTypes from "prop-types";
import LanguageIcon from '@mui/icons-material/Language';

export const ProjectCard = ({ data }) => {
    // Maps through the data props and displays cards of the different projects i
    return data.map((data) => {
      return (
        <Grid item xs={12} sm={6} md={3} key={data.id}>
        <Card sx={{ display: "flex", flexDirection: "column", Width: '200px', height: '200px', margin: '20px' }}>
            {/* Card Content */}
            <CardContent>
              <Grid container justifyContent={"center"}>
                <Typography gutterBottom variant="h5" component="div">
                  {/* Displays the name of the project */}
                  {data.name}
                </Typography>
              </Grid>
              <Grid container justifyContent={"center"}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {/* Displays a description of the project */}
                  {data.description}
                </Typography>
              </Grid>
            </CardContent>
  
            {/* Card Actions will display two icons that will redirect
            user to the github repo and the deployed page*/}
            <CardActions sx={{ justifyContent: "center", marginTop: "auto" }}>
              {/* GitHub Icon */}
              {/* When clicked on redirects to github repo */}
              <IconButton
                sx={{ color: "skyBlue" }}
                onClick={() => window.open(data.github)}
              >
                <GitHubIcon style={{ width: 35, height: 35 }} />
              </IconButton>
  
              {/* Deployed Page Icon */}
              <IconButton
                sx={{ color: "#000" }}
                onClick={() => window.open(data.deployed)}
              >
                <LanguageIcon style={{ width: 35, height: 35 }} />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  };