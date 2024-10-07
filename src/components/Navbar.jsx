import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Grid2 as Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const [value, setValue] = useState(() => {
    return sessionStorage.getItem("selectedTab") || "one";
  });

  // Use the useNavigate hook from react-router-dom to navigate between routes
  const navigate = useNavigate();

  const routes = {
    one: "/",
    two: "/mywork",
    three: "/contactme",
    four: "/resume",
  };

// Handle the change of the selected tab
  const handleChange = (event, newValue) => {
    setValue(newValue);
    sessionStorage.setItem("selectedTab", newValue);
    navigate(routes[newValue]);
  };
        {/* renders navbar */}

  return (
    <Grid
    className="nav"
    container
    style={{
      width: "100%",
      padding: "20px",
      background: "#008000", // Dark green color
      color: "#FFF",
    }}
  >
      <Grid container size={12} alignItems={"center"} marginRight={"15px"}>
        <Grid size={{ xs: 6, md: 8, sm: 7 }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', sans-serif",
              fontWeight: 400,
            }}
          >
            Angel Beltran 
          </h2>
        </Grid>
        <Grid size={{ md: 4, xs: 6, sm: 5 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab
              value="one"
              label="My Bio"
              style={{ color: "#FFF" }} 
              sx={{ minWidth: 80, padding: "6px 12px", fontSize: ".850rem" }} 
            />
            <Tab
              value="two"
              label="My Work"
              style={{ color: "#FFF" }} 
              sx={{ minWidth: 80, padding: "6px 12px", fontSize: ".850rem" }}
            />
            <Tab
              value="three"
              label="Contact Me"
              style={{ color: "#FFF" }} 
              sx={{ minWidth: 80, padding: "6px 12px", fontSize: ".850rem" }} 
            />

            <Tab
              value="four"
              label="Resume"
              style={{ color: "#FFF" }} 
              sx={{ minWidth: 80, padding: "6px 12px", fontSize: ".850rem" }} 
            />
          </Tabs>
        </Grid>
      </Grid>
    </Grid>
  );
};