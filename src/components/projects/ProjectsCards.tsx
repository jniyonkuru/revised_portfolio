import { Box, Typography } from "@mui/material";
import ProjectShowcaseCard from "./ProjectCard";
import { useProjects } from "../../ hooks/projects";
import Spinner from "../Spinner";

function ProjectsCards() {
  const { data: projects, isLoading, isError, error } = useProjects();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <Typography color="error" sx={{ p: 2 }}>
        {error.message}
      </Typography>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <Typography sx={{ p: 2, color: "text.secondary" }}>
        No projects to show yet.
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        padding: { xs: 2, md: 4 },
      }}
    >
      {projects.map((project) => (
        <ProjectShowcaseCard key={project.id} project={project} />
      ))}
    </Box>
  );
}

export default ProjectsCards;
