// third party packages
import { Box, Typography, Chip, ListItem, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { Project } from "../../types";
//local packages
import OptionsMenu from "./OptionsMenu";
import MoreButton from "./MoreButton";

interface Props {
  project: Project;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const ProjectListItem: React.FC<Props> = ({
  project,
  onDelete,
  onEdit,
}: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ListItem
      sx={(theme) => ({
        boxShadow: ` 0 0 1px ${theme.palette.secondary.contrastText}`,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.default,
        mb: theme.spacing(1),
      })}
    >
      <ListItemText
        primary={
          <Box
            sx={(theme) => ({
              mb: theme.spacing(2),
            })}
          >
            <Typography
              variant="h6"
              sx={(theme) => ({
                color: theme.palette.text.primary,
                fontWeight: theme.typography.fontWeightBold,
                textAlign: "center",
              })}
            >
              {project.title}
            </Typography>
          </Box>
        }
        secondary={
          <Box
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              gap: theme.spacing(1),
              alignItems: "center",
            })}
          >
            <Box sx={{ maxWidth: "80%" }}>
              <Typography>{project.description}</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ flex: 1 }}>
                {project.tags.length > 0 &&
                  project.tags.map((item) => (
                    <Chip
                      sx={(theme) => ({ mr: theme.spacing(1) })}
                      label={item}
                    />
                  ))}
              </Box>
              <Box>
                <MoreButton handleClick={handleClick} />
                <OptionsMenu
                  open={open}
                  onClose={handleClose}
                  onDelete={onDelete}
                  onEdit={onEdit}
                  id={project.id}
                  anchorEl={anchorEl}
                />
              </Box>
            </Box>
          </Box>
        }
      />
    </ListItem>
  );
};

export default ProjectListItem;
