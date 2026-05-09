//third party packages
import { Box, Fab, List, Typography } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useState } from 'react';
//local packages
import ExperienceItem from './ExperienceItem';
import useExperience, { useDeleteExperience } from '../../ hooks/experiences';
import Spinner from '../Spinner';
import ConfirmDialog from './ConfirmDialog';
import ExperienceForm from './ExperienceForm';
import type { Experience } from '../../types';

function ExperiencesList() {
  const { data: experiences, isError, isLoading } = useExperience();
  const { mutate: deleteExperience, isPending: isDeleting } =
    useDeleteExperience();
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [selected, setSelected] = useState<Experience | null>(null);

  const handleAdd = () => {
    setSelected(null);
    setFormOpen(true);
  };
  const handleEdit = (id: number) => {
    const experience = experiences?.find((item) => item.id === id) ?? null;
    setSelected(experience);
    setFormOpen(true);
  };
  const handleDelete = (id: number) => {
    setDeleteId(id);
  };
  const handleConfirmDelete = () => {
    if (deleteId === null) return;
    deleteExperience(deleteId, {
      onSettled: () => setDeleteId(null),
    });
  };

  return (
    <>
      {isLoading && <Spinner />}
      {isError && <Typography color="error">error</Typography>}
      {!isLoading && !isError && (
        <List
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(1),
          })}
        >
          {experiences?.map((item) => (
            <ExperienceItem
              key={item.id}
              experience={item}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </List>
      )}
      <Box
        sx={(theme) => ({
          position: 'sticky',
          bottom: theme.spacing(2),
          display: 'flex',
          justifyContent: 'flex-end',
          pointerEvents: 'none',
          mt: 'auto',
          pt: 2,
        })}
      >
        <Fab
          onClick={handleAdd}
          aria-label="Add experience"
          sx={(theme) => ({
            pointerEvents: 'auto',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.primary,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            },
          })}
        >
          <AddOutlinedIcon />
        </Fab>
      </Box>
      {formOpen && (
        <ExperienceForm
          open={formOpen}
          setOpen={setFormOpen}
          experience={selected}
        />
      )}
      <ConfirmDialog
        open={deleteId !== null}
        title="Delete experience?"
        description="This will permanently delete the experience. This action cannot be undone."
        loading={isDeleting}
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeleteId(null)}
      />
    </>
  );
}

export default ExperiencesList;
