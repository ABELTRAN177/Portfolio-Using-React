import { ProjectCard } from '../Interface/card';
import { Grid } from "@mui/material";
import { myWorkData }  from "../../assets/javascript/myWork";

// Renders the MyWork page
export const MyWork = () => {
    return (
        <Grid
        container
        spacing={2}
        direction="row"
        sx={{
          minHeight: "50vh",
          paddingTop: "50px", 
          paddingBottom: "100px", 
          background:"#CED3DC",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <ProjectCard data={myWorkData}></ProjectCard>
      </Grid>
    );
  };