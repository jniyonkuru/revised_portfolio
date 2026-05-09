// third party packages
import { Box, Typography, Chip, ListItem, Stack, Divider } from "@mui/material";
import React, { useState } from "react";
import { Project } from "../../types";
//local packages
import OptionsMenu from "./OptionsMenu";
import MoreButton from "./MoreButton";
import { listItemCardSx } from "./listItemCard";

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

  const isLink = Boolean(project.github_url);

  return (
    <ListItem
      sx={[listItemCardSx, { position: "relative" }, isLink && { cursor: "pointer" }]}
    >
      {/* Stretched-link overlay: the whole card navigates, but stays a valid
          <li> with no interactive elements nested inside the anchor. */}
      {isLink && (
        <Box
          component="a"
          href={project.github_url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} repository`}
          sx={(theme) => ({
            position: "absolute",
            inset: 0,
            zIndex: 1,
            borderRadius: "inherit",
            outlineOffset: "2px",
            "&:focus-visible": {
              outline: `2px solid ${theme.palette.secondary.main}`,
            },
          })}
        />
      )}
      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
        <Typography
          variant="h6"
          sx={(theme) => ({
            flex: 1,
            minWidth: 0,
            lineHeight: 1.2,
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightBold,
          })}
        >
          {project.title}
        </Typography>
        {/* Lifted above the overlay so the menu stays clickable. */}
        <Box sx={{ position: "relative", zIndex: 2, flexShrink: 0, mt: -0.5, mr: -0.5 }}>
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
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ lineHeight: 1.5 }}
      >
        {project.description}
      </Typography>
      {project.tags.length > 0 && (
        <>
          <Divider />
          <Box>
            <Typography
              variant="overline"
              sx={(theme) => ({
                color: theme.palette.text.secondary,
                letterSpacing: "0.08em",
              })}
            >
              Tags
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{ flexWrap: "wrap", mt: 0.5 }}
            >
              {project.tags.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  size="small"
                  sx={(theme) => ({
                    height: 22,
                    borderRadius: "6px",
                    fontWeight: theme.typography.fontWeightMedium,
                    color: theme.palette.text.primary,
                    backgroundColor:
                      "rgba(var(--mui-palette-secondary-mainChannel) / 0.14)",
                    border:
                      "1px solid rgba(var(--mui-palette-secondary-mainChannel) / 0.30)",
                    "& .MuiChip-label": { px: 1 },
                  })}
                />
              ))}
            </Stack>
          </Box>
        </>
      )}
    </ListItem>
  );
};

export default ProjectListItem;
