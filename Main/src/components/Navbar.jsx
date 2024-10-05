import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Grid2 as Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const [value, setValue] = useState(() => {
    return sessionStorage.getItem("selectedTab") || "one";
  });

  const navigate = useNavigate();

  const routes = {
    one: "/",
    two: "/MyWork",
    three: "/contactMe",
    four: "/Resume",
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    sessionStorage.setItem("selectedTab", newValue);
    navigate(routes[newValue]);
  };

  return (
    <Grid
      className="nav"
      container
      style={{
        width: "100%",
        padding: "20px",
        background: "linear-gradient(90deg, #f5f7fa, #c3cfe2)",
        color: "#333",
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
          {/* Tabs is a Material UI component that will help with the 
          routing of the different endpoints */}
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {/* My Bio will display on the home page */}
            <Tab
              value="one"
              label="My Bio"
              sx={{ minWidth: 80, padding: "6px 12px", fontSize: ".850rem" }} 
            />
            <Tab
              value="two"
              label="My Work"
              sx={{ minWidth: 80, padding: "6px 12px", fontSize: ".850rem" }}
            />
            <Tab
              value="three"
              label="Contact Me"
              sx={{ minWidth: 80, padding: "6px 12px", fontSize: ".850rem" }} 
            />

            <Tab
              value="four"
              label="Resume"
              sx={{ minWidth: 80, padding: "6px 12px", fontSize: ".850rem" }} 
            />
          </Tabs>
        </Grid>
      </Grid>
    </Grid>
  );
};