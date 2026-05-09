import { IconButton } from "@mui/material";
import { User } from "lucide-react";

interface Props {
  handleClick: () => void;
}

function UserButton({ handleClick }: Props) {
  return (
    <IconButton
      aria-label="Sign in"
      onClick={handleClick}
      sx={(theme) => ({
        color: theme.palette.text.primary,
        transition: theme.transitions.create("background-color"),
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
        },
      })}
    >
      <User size={20} />
    </IconButton>
  );
}

export default UserButton;
