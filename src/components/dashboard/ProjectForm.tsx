// third party packages
import { Box, Button, Modal, Backdrop, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useEffect, useMemo, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

//local packages
import { ProjectFormSchema } from '../../types';
import type { ProjectFormValues } from '../../types';
import {
  useReadProject,
  useAddProject,
  useUpdateProject,
} from '../../ hooks/projects';
import ProjectFormContainer from './forms/ProjectFormContainer';
import RHFTextField from './forms/RHFTextField';
import ImageInput from './forms/ImageInput';
import ProjectImage from './forms/ProjectImage';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  // When a projectId is provided the form edits that project; otherwise it
  // creates a new one.
  projectId?: number | null;
}

function ProjectForm({ open, setOpen, projectId }: Props) {
  const isEdit = projectId != null;

  const { data: project } = useReadProject({ projectId });

  // Map the API project (tags: string[]) onto the form shape (tags: string).
  const formValues = useMemo<ProjectFormValues | undefined>(() => {
    if (!project) return undefined;
    return {
      title: project.title,
      github_url: project.github_url,
      description: project.description,
      tags: project.tags.join(', '),
      image: project.image,
    };
  }, [project]);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid, dirtyFields },
  } = useForm<ProjectFormValues>({
    mode: 'onChange',
    values: formValues,
    defaultValues: {
      title: '',
      description: '',
      github_url: '',
      tags: '',
    },
    resolver: zodResolver(ProjectFormSchema),
  });

  const { mutate: addProject, isPending: isAdding } = useAddProject();
  const { mutate: updateProject, isPending: isUpdating } = useUpdateProject();
  const isPending = isAdding || isUpdating;

  const [imageUrl, setImageUrl] = useState('');

  // Seed the preview with the existing image when editing.
  useEffect(() => {
    if (project && typeof project.image === 'string') {
      setImageUrl(project.image);
    }
  }, [project]);

  const handleClose = () => {
    // Revoke only blob: previews we created; revoking a remote URL is harmless.
    if (imageUrl.startsWith('blob:')) {
      URL.revokeObjectURL(imageUrl);
    }
    setImageUrl('');
    setOpen(false);
  };

  const buildFormData = (data: ProjectFormValues, keys: (keyof ProjectFormValues)[]) => {
    const formData = new FormData();
    keys.forEach((key) => {
      const value = data[key];
      if (value === undefined || value === null) return;
      if (key === 'tags' && typeof value === 'string') {
        value
          .split(',')
          .map((tag) => tag.trim())
          .filter(Boolean)
          .forEach((tag) => formData.append('tags', tag));
      } else if (typeof value === 'string' || value instanceof File) {
        formData.append(key, value);
      }
    });
    return formData;
  };

  const onSubmit = (data: ProjectFormValues) => {
    if (isEdit) {
      // Send only the fields the user actually changed.
      const keys = Object.keys(dirtyFields) as (keyof ProjectFormValues)[];
      const formData = buildFormData(data, keys);
      updateProject(
        { project: formData, projectId },
        {
          onSuccess: () => handleClose(),
          onError: () => reset(formValues),
        },
      );
    } else {
      // Send every field for a brand new project.
      const keys = Object.keys(data) as (keyof ProjectFormValues)[];
      const formData = buildFormData(data, keys);
      addProject(formData, {
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
            {isEdit ? 'Edit Project' : 'Create Project'}
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
              name="title"
              label="Title"
              helperText="Title of the project"
            />
            <RHFTextField
              control={control}
              name="github_url"
              label="Github URL"
              helperText="Github URL of the project repository"
            />
            <RHFTextField
              control={control}
              name="tags"
              label="Tags"
              helperText="Comma separated technologies"
            />
            <RHFTextField
              control={control}
              name="description"
              label="Description"
              helperText="Description of the project"
              multiline
              rows={4}
            />
            {imageUrl && (
              <Box sx={{ height: '100px', my: '10px' }}>
                <ProjectImage imageUrl={imageUrl} alt="Project image" />
              </Box>
            )}
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
              <ImageInput
                name="image"
                control={control}
                setImageUrl={setImageUrl}
                // Image is mandatory when creating; optional when editing
                // (an existing image is already attached).
                rules={isEdit ? undefined : { required: 'Image is required' }}
              >
                {isEdit ? 'Update Image' : 'Upload Image'}
              </ImageInput>
            </Box>
            {errors.image && (
              <Typography
                color="error"
                variant="caption"
                sx={{ display: 'block', textAlign: 'center' }}
              >
                {errors.image.message}
              </Typography>
            )}
          </Box>
        </Box>
      </ProjectFormContainer>
    </Modal>
  );
}

export default ProjectForm;
