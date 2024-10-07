import { useState } from 'react';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import githubSVG from '../assets/github.svg';
import linkedinSVG from '../assets/linkedin.svg';

export const Footer = () => {
    const [value, setValue] = useState(0);
    const gitHubLink = () => {
        window.location.href = "https://github.com/ABELTRAN177";
    };
    const linkedInLink = () => {
        window.location.href = "https://www.linkedin.com/in/angel-beltran-b86277205/";
    };

    return (
        <Box
      sx={{
        width: "100%",
        background: "linear-gradient(90deg, #f5f7fa, #c3cfe2)",
        padding: "12px",
        boxShadow: "0 -1px 4px rgba(0,0,0,0.2)",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {/* Using a GitHubSVG the log will redirect to GitHubpage */}
        <BottomNavigationAction
          label="GitHub"
          icon={
            <img
              src={gitHubLink}
              alt="GitHub Icon"
              style={{ width: 35, height: 35 }}
            />
          }
          // When the cursor hovers over icons will display background change
          sx={{
            "&:hover": {
              color: "primary.main", 
              backgroundColor: "rgba(0,0,0,0.1)", 
            },
          }}
          onClick={handleGitHubClick}
        />
        <BottomNavigationAction
          label="Linkedin"
          icon={
            <img
              src={linkedInLink}
              style={{ width: 35, height: 35, color: "black" }}
            />
          }
          sx={{
            "&:hover": {
              color: "primary.main", 
              backgroundColor: "rgba(0,0,0,0.1)", 
            },
          }}
          onClick={handleLinkedinClick}
        />
      </BottomNavigation>
    </Box>
  );
};