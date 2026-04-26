// third party packages

import { Box, Typography, List } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
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
}

function ExperienceTimeline({ experience }: Props) {
  return (
    <Box sx={{ color: "#fff" }}>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                p: 1,
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  sx={{ color: "text.primary", textWrap: "nowrap" }}
                >
                  {experience.organization}
                </Typography>
                <Typography sx={{ color: "text.primary" }}>
                  {experience.role}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "grey.500" }}>
                  {`${formatDateTime(experience.start_date)} - ${experience.end_date ? formatDateTime(experience.end_date) : "Present"}`}
                </Typography>
              </Box>
              <Box>
                <List>
                  {experience.tasks.map((item) => (
                    <ListItemChecked text={item} />
                  ))}
                </List>
              </Box>
            </Box>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}

export default ExperienceTimeline;
