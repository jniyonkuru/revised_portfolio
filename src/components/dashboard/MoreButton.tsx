import React from "react";
import { IconButton } from "@mui/material";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";

interface Props {
    handleClick: (e: React.MouseEvent<HTMLElement>) => void;
}

function MoreButton({ handleClick }: Props) {
  return (
    <IconButton onClick={handleClick}>
      <MoreVertRoundedIcon fontSize="small" />
    </IconButton>
  );
}

export default MoreButton;
