//third party packages
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import React from "react";

//local packages

import OptionsMenu from "./OptionsMenu";
import MoreButton from "./MoreButton";
import { formatDateTime } from "../../utils/formatDates";

interface Experience {
  id: number;
  role: string;
  organization: string;
  tasks: string[];
  start_date: string;
  end_date: string |null;
}
interface Props {
  experience: Experience;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

function ExperienceItem({ experience, onDelete, onEdit }: Props) {
  const [anchorEl,setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  
  const handleClose = () => {
      setAnchorEl(null)
    }
    
    const handleClick = (e:React.MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget)
    }
  return (
    <ListItem
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        boxShadow: ` 0 0 1px ${theme.palette.secondary.contrastText}`,
        borderRadius: theme.shape.borderRadius,
      })}
    >
      <ListItemText
        primary={
          <Box>
            <Typography
              sx={(theme) => ({
                fontWeight: theme.typography.fontWeightBold,
                color: theme.palette.text.primary,
              })}
              variant="h5"
            >
              {experience.organization}
            </Typography>
          </Box>
        }
        secondary={
          <Box sx={(theme) => ({ padding: theme.spacing(1, 3) })}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              {experience.role}
            </Typography>
            <Typography
              px={2}
              variant="body2"
            >{`${formatDateTime(experience.start_date)} - ${formatDateTime(experience.end_date!) || "Present"}`}</Typography>
          </Box>
        }
      />
      <Box sx={{ display: "flex", position: "relative", width: "100%" }}>
        <Box>
          <Typography
            variant="body1"
            sx={(theme) => ({
              fontWeight: theme.typography.fontWeightBold,
              color: theme.palette.text.primary,
              ml: 2,
            })}
          >
            Tasks
          </Typography>
          <List sx={(theme) => ({ padding: theme.spacing(1, 3) })}>
            {experience.tasks.map((item) => (
              <ListItem disablePadding key={experience.id}>
                <CheckIcon fontSize="small" />
                {<ListItemText secondary={item} />}
              </ListItem>
            ))}
          </List>
        </Box>
        <Box sx={{ position: "absolute", right: 0, bottom: 0 }}>
          <MoreButton handleClick={handleClick} />
          <OptionsMenu
            id={experience.id}
            open={open}
            onClose={handleClose}
            onDelete={onDelete}
            onEdit={onEdit}
            anchorEl={anchorEl}
          />
        </Box>
      </Box>
    </ListItem>
  );
}

export default ExperienceItem;
