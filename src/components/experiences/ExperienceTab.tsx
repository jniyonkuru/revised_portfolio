// third party packages
import React from "react";
import { Briefcase } from "lucide-react";
import { Box } from "@mui/material";

//local Packages
import Experiences from "./Experiences";
import useExperience from "../../ hooks/experiences";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import SectionHeader from "../SectionHeader";

const ExperienceTab: React.FC = () => {
  const {
    data: experinces,
    isLoading: experiencesLoading,
    isError: isExperienceError,
  } = useExperience();

  return (
    <Box>
      <SectionHeader icon={Briefcase} title="Experiences" />
      <ErrorBoundary>
        <Experiences
          experiences={experinces}
          isError={isExperienceError}
          isLoading={experiencesLoading}
        />
      </ErrorBoundary>
    </Box>
  );
};

export default ExperienceTab;
