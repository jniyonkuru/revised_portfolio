//third party packages
import React from "react";
//local packages

import ExperienceTimeline from "./ExperienceTimeline";
import { Experience } from "../../types";
import { Typography } from "@mui/material";

interface Props {
  experiences: Experience[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

const Experiences: React.FC<Props> = ({ experiences, isError }: Props) => {
  if (isError) {
    return <Typography color="error">Error</Typography>;
  }
  return (
    <>
      {experiences?.map((item) => (
        <ExperienceTimeline key={item.id} experience={item} />
      ))}
    </>
  );
};

export default Experiences;
