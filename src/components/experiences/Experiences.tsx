//third party packages
import React from "react";
import { Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import { timelineItemClasses } from "@mui/lab/TimelineItem";

//local packages
import ExperienceTimeline from "./ExperienceTimeline";
import { Experience } from "../../types";
import Spinner from "../Spinner";

interface Props {
  experiences: Experience[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

const Experiences: React.FC<Props> = ({
  experiences,
  isError,
  isLoading,
}: Props) => {
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <Typography color="error">Error</Typography>;
  }
  if (!experiences || experiences.length === 0) {
    return (
      <Typography sx={{ color: "text.secondary", p: 2 }}>
        No experiences yet.
      </Typography>
    );
  }
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {experiences.map((item, index) => (
        <ExperienceTimeline
          key={item.id}
          experience={item}
          isLast={index === experiences.length - 1}
        />
      ))}
    </Timeline>
  );
};

export default Experiences;
