// third party packages

import React from "react";
import { Box } from "@mui/material";
import { FolderGit2 } from "lucide-react";


//local packages
import ProjectsCards from "./ProjectsCards";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import SectionHeader from "../SectionHeader";

const ProjectsTab: React.FC = () => {
  return (
    <Box>
      <SectionHeader icon={FolderGit2} title="Projects" />
      <ErrorBoundary>
        <ProjectsCards />
      </ErrorBoundary>
    </Box>
  );
};

export default ProjectsTab
