// third party packages

import React from "react";
import { Box, Typography } from "@mui/material";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";


//local packages 
import ProjectsCards from "./ProjectsCards";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const ProjectsTab: React.FC = () => {
    return (<Box>
        <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <FolderOpenIcon
                  sx={{ color: "text.primary", fontSize: "30px" }}
                />
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
                  Projects
                </Typography>
              </Box>
      </Box>
      <ErrorBoundary>
        <ProjectsCards />
        </ErrorBoundary>
        </Box>)
}

export default ProjectsTab
