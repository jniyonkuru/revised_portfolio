import React from "react";
import { IconButton } from "@mui/material";
import { EllipsisVertical } from "lucide-react";

interface Props {
    handleClick: (e: React.MouseEvent<HTMLElement>) => void;
}

function MoreButton({ handleClick }: Props) {
  return (
    <IconButton
      onClick={handleClick}
      size="small"
      aria-label="More options"
      sx={(theme) => ({
        color: theme.palette.text.secondary,
        transition: theme.transitions.create(["background-color", "color"]),
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
          color: theme.palette.text.primary,
        },
      })}
    >
      <EllipsisVertical size={18} />
    </IconButton>
  );
}

export default MoreButton;
