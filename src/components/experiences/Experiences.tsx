//third party packages
import React from "react";
//local packages

import ExperienceTimeline from "./ExperienceTimeline";
import { Experience } from "../../types";
import { Typography } from "@mui/material";
import Spinner from "../Spinner";

interface Props {
  experiences: Experience[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

const Experiences: React.FC<Props> = ({ experiences, isError,isLoading }: Props) => {
  if (isLoading) {
    return(<Spinner/>)
  }
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
