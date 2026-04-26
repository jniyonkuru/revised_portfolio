//third party packages

import { Box, List, Typography } from "@mui/material";
import React, { useState } from "react";
//local packages
import ProjectListItem from "./projectlistitem";
import { useProjects } from "../../ hooks/projects";
import Spinner from "../Spinner";
import ProjectForm from "./ProjectForm";
import { Project } from "../../types";

const ProjectList: React.FC = () => {
  const { data: projects, error, isError, isLoading } = useProjects();
  const [formOpen, setFormOpen] = useState(false)
  const [selected,setSelected]=useState<number|null>(null)
  const handleEdit = (id: number) => {
    setFormOpen(true)
    setSelected(id)
  };
  const handleDelete = (id: number) => {
    console.log("delete", id);
  };
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Typography>{error.message}</Typography>;
  }
  return (
    <Box>
      <ProjectForm open={formOpen} setOpen={setFormOpen} project={selected? (projects as Project[]).find(item=>item.id===selected):undefined} />
      <List sx={(theme) => ({ padding: theme.spacing(1) })}>
        {projects?.map((item: any) => (
          <ProjectListItem
            key={item.id}
            project={item}
            onDelete={() => handleDelete(item.id)}
            onEdit={() => handleEdit(item.id)}
          />
        ))}
      </List>
    </Box>
  );
};

export default ProjectList;
