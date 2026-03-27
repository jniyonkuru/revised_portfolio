// third party packages 
import React from "react";
import BusinessCenter from "@mui/icons-material/BusinessCenter";
import { Box, Typography } from "@mui/material";

//local Packages
import Experiences from "./Experiences";
import useExperience from "../../ hooks/experiences";


const ExperienceTab: React.FC = () => {
  const {
    data: experinces,
    isLoading: experiencesLoading,
    isError: isExperienceError,
  } = useExperience();

  return (
    <Box>
      <BusinessCenter sx={{ color: "text.primary", fontSize: "30px" }} />
      <Typography
        component="span"
        variant="h5"
        sx={{
          color: "text.primary",
          textAlign: "center",
          ml: 2,
          fontWeight: "bold",
        }}
      >
        Experiences
      </Typography>
      <Experiences
        experiences={experinces}
        isError={isExperienceError}
        isLoading={experiencesLoading}
      ></Experiences>
    </Box>
  );
};

export default ExperienceTab;
