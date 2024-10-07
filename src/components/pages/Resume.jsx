import { Grid2 as Grid, Typography, Link } from "@mui/material";

export const Resume = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        paddingTop: "50px",
        paddingBottom: "100px",
        background: "#CED3DC",
      }}
    >
      <Grid
        container
        size={12}
        justifyContent={"center"}
        sx={{ background: "white", border: "2px, black,solid" }}
      >
        <Grid size={12}>
          <Typography textAlign="center" variant="h3">
            Resume
          </Typography>
        </Grid>
        <Grid size={12} sx={{ paddingBottom: "40px" }}>
          <Typography textAlign="center" variant="body1">
            Download my{" "}
            <Link
              href="/public/Resume/Angels Resume.pdf" // Replace with the actual path to the file
              download="Angel Resume.pdf"
              underline="hover"
            >
              Resume
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};