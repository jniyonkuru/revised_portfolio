// third party packages
import { Box, Button, Modal, Backdrop, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useMemo } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

//local packages
import { ExperienceFormSchema } from '../../types';
import type { Experience, ExperienceFormValues } from '../../types';
import { useAddExperience, useUpdateExperience } from '../../ hooks/experiences';
import ProjectFormContainer from './forms/ProjectFormContainer';
import RHFTextField from './forms/RHFTextField';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  // When an experience is provided the form edits it; otherwise it creates one.
  experience?: Experience | null;
}

// `start_date`/`end_date` may arrive as full ISO timestamps; a date input only
// understands the YYYY-MM-DD prefix.
const toDateInput = (value?: string | null) => (value ? value.slice(0, 10) : '');

function ExperienceForm({ open, setOpen, experience }: Props) {
  const isEdit = experience != null;

  // Map the API experience (tasks: string[]) onto the form shape (tasks: string).
  const formValues = useMemo<ExperienceFormValues | undefined>(() => {
    if (!experience) return undefined;
    return {
      role: experience.role,
      organization: experience.organization,
      start_date: toDateInput(experience.start_date),
      end_date: toDateInput(experience.end_date),
      tasks: experience.tasks.join('\n'),
    };
  }, [experience]);

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<ExperienceFormValues>({
    mode: 'onChange',
    values: formValues,
    defaultValues: {
      role: '',
      organization: '',
      start_date: '',
      end_date: '',
      tasks: '',
    },
    resolver: zodResolver(ExperienceFormSchema),
  });

  const { mutate: addExperience, isPending: isAdding } = useAddExperience();
  const { mutate: updateExperience, isPending: isUpdating } =
    useUpdateExperience();
  const isPending = isAdding || isUpdating;

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data: ExperienceFormValues) => {
    const tasks = data.tasks
      .split('\n')
      .map((task) => task.trim())
      .filter(Boolean);
    if (tasks.length === 0) return;

    const payload = {
      role: data.role,
      organization: data.organization,
      start_date: data.start_date,
      end_date: data.end_date ? data.end_date : null,
      tasks: tasks as [string, ...string[]],
    };

    if (isEdit) {
      updateExperience(
        { ...payload, id: experience.id },
        {
          onSuccess: () => handleClose(),
          onError: () => reset(formValues),
        },
      );
    } else {
      addExperience(payload, {
        onSuccess: () => {
          reset();
          handleClose();
        },
      });
    }
  };

  return (
    <Modal
      open={open}
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 1000 } }}
    >
      <ProjectFormContainer>
        <Box
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(2),
          })}
        >
          <Typography
            gutterBottom
            variant="h6"
            sx={(theme) => ({
              textAlign: 'center',
              color: theme.palette.text.primary,
            })}
          >
            {isEdit ? 'Edit Experience' : 'Add Experience'}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={(theme) => ({
              display: 'flex',
              flexDirection: 'column',
              gap: theme.spacing(2),
            })}
          >
            <RHFTextField
              control={control}
              name="role"
              label="Role"
              helperText="Your role / job title"
            />
            <RHFTextField
              control={control}
              name="organization"
              label="Organization"
              helperText="Company or organization name"
            />
            <RHFTextField
              control={control}
              name="start_date"
              label="Start date"
              type="date"
            />
            <RHFTextField
              control={control}
              name="end_date"
              label="End date"
              type="date"
              helperText="Leave empty if this is your current role"
            />
            <RHFTextField
              control={control}
              name="tasks"
              label="Tasks"
              helperText="One task per line"
              multiline
              rows={4}
            />
            <Box
              sx={(theme) => ({
                display: 'flex',
                gap: theme.spacing(1),
                justifyContent: 'center',
              })}
            >
              <Button
                type="submit"
                variant="contained"
                color="success"
                disableElevation
                disabled={!isValid || isPending}
              >
                {isEdit ? 'Save' : 'Submit'}
              </Button>
              <Button
                variant="contained"
                color="warning"
                disableElevation
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      </ProjectFormContainer>
    </Modal>
  );
}

export default ExperienceForm;
