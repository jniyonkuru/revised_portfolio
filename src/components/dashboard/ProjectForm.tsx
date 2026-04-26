// third part packages
import {
  Box,
  TextField,
  Typography,
  Modal,
  Backdrop,
  Button,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";

//local packages
import { Project } from "../../types";
import { useEffect } from "react";
import { useUpdateProject } from "../../ hooks/projects";

interface Props {
  open: boolean;
  project?: Project;
  setOpen: (open: boolean) => void;
}

function ProjectForm({ open, project, setOpen }: Props) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { dirtyFields },
  } = useForm<Project>();
  const {
    mutate: updateProject,
    isError,
    isPending,
  } = useUpdateProject();
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (project) {
      reset(project);
    }
  }, [project, reset]);

  const onSubmit = (data: any) => {
    const { created_at, updated_at, user_id, ...rest } = data;
    let updatedProject = Object.keys(dirtyFields).includes("tags")
      ? { ...rest, tags: rest.tags.split(",") }
      : rest;
    updateProject(updatedProject as Project);
    if (!isError && !isPending) {
      reset();
      setOpen(false);
    }
    if (isError) {
      alert("An error occurred while updating the project. Please try again.");
      reset(project);
    }
    if (isPending) {
      setDisable(true);
    }
  };

  return (
    <Modal
      open={open}
      slots={{
        backdrop: Backdrop,
      }}
      slotProps={{
        backdrop: {
          timeout: 1000,
        },
      }}
    >
      <Box
        sx={(theme) => ({
          width: "400px",
          backgroundColor: theme.palette.background.default,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          outline: 0,
          borderRadius: theme.shape.borderRadius,
          padding: theme.spacing(2, 3),
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: theme.palette.secondary.contrastText,
              borderRadius: theme.shape.borderRadius,
            },
            "&:hover fieldset": {
              borderColor: theme.palette.secondary.contrastText,
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.secondary.contrastText,
            },
          },
          "& .MuiInputLabel-root": {
            color: theme.palette.text.primary,
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: theme.palette.text.primary,
          },
          "& .MuiButton-contained": {
            width: "fit-content",
            color: theme.palette.primary,
            borderRadius: theme.shape.borderRadius,
          },
        })}
      >
        <Typography
          gutterBottom
          variant="h6"
          sx={(theme) => ({
            textAlign: "center",
            color: theme.palette.text.primary,
          })}
        >
          Project
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(2),
          })}
        >
          <Controller
            name="title"
            control={control}
            defaultValue=""
            rules={{
              required: "The title of the project is required ",
              minLength: 2,
            }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                helperText={
                  fieldState.error?.message || " The title of the project"
                }
                fullWidth
                size="small"
                label="Title"
                error={!!fieldState.error}
              />
            )}
          />
          <Controller
            name="github_url"
            control={control}
            rules={{ required: "Github Url is required!!" }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="GitHub url"
                error={!!fieldState.error}
                helperText={
                  fieldState.error?.message ||
                  "Url to github repository of the project"
                }
                fullWidth
                size="small"
              />
            )}
          />
          <Controller
            name="tags"
            control={control}
            rules={{ required: "technologies are required " }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Tags"
                error={!!fieldState.error}
                helperText={
                  fieldState.error?.message || "Comma separated technologies"
                }
                fullWidth
                size="small"
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            rules={{ required: "Description of the project is required" }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                multiline
                error={!!fieldState.error}
                helperText={
                  fieldState.error?.message || "Description of the project "
                }
                fullWidth
                rows={8}
                label="description"
              />
            )}
          />
          <Box
            sx={(theme) => ({
              display: "flex",
              gap: theme.spacing(1),
              justifyContent: "center",
            })}
          >
            <Button
              type="submit"
              variant="contained"
              color="success"
              disableElevation
              disabled={disable}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              color="warning"
              disableElevation
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default ProjectForm;
