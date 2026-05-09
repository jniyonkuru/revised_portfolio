//third party packages
import { Box, Divider, ListItem, Stack, Typography } from "@mui/material";
import { CalendarDays, ChevronRight } from "lucide-react";
import React from "react";

//local packages

import OptionsMenu from "./OptionsMenu";
import MoreButton from "./MoreButton";
import { formatDateTime } from "../../utils/formatDates";
import { listItemCardSx } from "./listItemCard";

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
    <ListItem sx={listItemCardSx}>
      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            variant="h6"
            sx={(theme) => ({
              lineHeight: 1.2,
              fontWeight: theme.typography.fontWeightBold,
              color: theme.palette.text.primary,
            })}
          >
            {experience.organization}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={(theme) => ({
              fontWeight: theme.typography.fontWeightMedium,
              color: theme.palette.secondary.main,
            })}
          >
            {experience.role}
          </Typography>
          <Box
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              mt: 0.5,
              color: theme.palette.text.disabled,
            })}
          >
            <Box component={CalendarDays} size={14} sx={{ flexShrink: 0 }} />
            <Typography variant="caption">
              {`${formatDateTime(experience.start_date)} — ${
                experience.end_date
                  ? formatDateTime(experience.end_date)
                  : "Present"
              }`}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ flexShrink: 0, mt: -0.5, mr: -0.5 }}>
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
      {experience.tasks.length > 0 && (
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
              Tasks
            </Typography>
            <Stack spacing={0.75} sx={{ mt: 0.5 }}>
              {experience.tasks.map((item, index) => (
                <Box
                  key={`${experience.id}-task-${index}`}
                  sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
                >
                  <Box
                    component={ChevronRight}
                    size={16}
                    sx={(theme) => ({
                      mt: "3px",
                      flexShrink: 0,
                      color: theme.palette.secondary.main,
                    })}
                  />
                  <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                    {item}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </>
      )}
    </ListItem>
  );
}

export default ExperienceItem;
