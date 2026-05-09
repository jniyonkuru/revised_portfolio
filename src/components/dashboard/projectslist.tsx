//third party packages

import { Box, List, Typography } from '@mui/material';
import React, { useState } from 'react';
//local packages
import ProjectListItem from './projectlistitem';
import { useProjects, useDeleteProject } from '../../ hooks/projects';
import Spinner from '../Spinner';
import ProjectForm from './ProjectForm';
import ConfirmDialog from './ConfirmDialog';
import { Project } from '../../types';

const ProjectList: React.FC = () => {
  const { data: projects, error, isError, isLoading } = useProjects();
  const { mutate: deleteProject, isPending: isDeleting } = useDeleteProject();
  // A single source of truth: the project currently being edited (null = none).
  const [editId, setEditId] = useState<number | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const handleEdit = (id: number) => setEditId(id);
  const handleDelete = (id: number) => setDeleteId(id);
  const handleConfirmDelete = () => {
    if (deleteId === null) return;
    deleteProject(deleteId, {
      onSettled: () => setDeleteId(null),
    });
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Typography>{error.message}</Typography>;
  }

  return (
    <Box>
      {editId !== null && (
        <ProjectForm
          open
          setOpen={(open) => {
            if (!open) setEditId(null);
          }}
          projectId={editId}
        />
      )}
      <ConfirmDialog
        open={deleteId !== null}
        title="Delete project?"
        description="This will permanently delete the project. This action cannot be undone."
        loading={isDeleting}
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeleteId(null)}
      />
      {projects && projects.length > 0 ? (
        <List sx={(theme) => ({ padding: theme.spacing(1) })}>
          {projects.map((item: Project) => (
            <ProjectListItem
              key={item.id}
              project={item}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </List>
      ) : (
        <Typography
          sx={(theme) => ({
            textAlign: 'center',
            color: theme.palette.text.secondary,
            mt: theme.spacing(3),
          })}
        >
          No projects yet.
        </Typography>
      )}
    </Box>
  );
};

export default ProjectList;
