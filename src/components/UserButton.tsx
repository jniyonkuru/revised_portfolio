import { IconButton } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

interface Props {
  handleClick: () => void;
}

function UserButton({ handleClick }: Props) {
  return (
    <IconButton
      sx={(theme) => ({
        "&:hover": {
          background: theme.palette.background + "20",
          transform: "scale(1.01)",
          transition: "transform 0.5s ease-in-out",
        },
      })}
      onClick={handleClick}
    >
      <PersonOutlineIcon
        fontSize="small"
        sx={(theme) => ({ color: theme.palette.text.primary })}
      />
    </IconButton>
  );
}

export default UserButton;
