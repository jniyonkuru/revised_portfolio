// third party packages

import { Typography, List } from "@mui/material";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

// local packages
import { Experience } from "../../types";
import { formatDateTime } from "../../utils/formatDates";
import ListItemChecked from "../ListItemChecked";

interface Props {
  experience: Experience;
  isLast?: boolean;
}

function ExperienceTimeline({ experience, isLast }: Props) {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        {!isLast && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent sx={{ pb: 4 }}>
        <Typography
          variant="h6"
          sx={(theme) => ({
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightBold,
          })}
        >
          {experience.organization}
        </Typography>
        <Typography sx={{ color: "secondary.main" }}>
          {experience.role}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
          {`${formatDateTime(experience.start_date)} — ${
            experience.end_date
              ? formatDateTime(experience.end_date)
              : "Present"
          }`}
        </Typography>
        <List sx={{ mt: 1 }}>
          {experience.tasks.map((item, index) => (
            <ListItemChecked key={`${experience.id}-${index}`} text={item} />
          ))}
        </List>
      </TimelineContent>
    </TimelineItem>
  );
}

export default ExperienceTimeline;
