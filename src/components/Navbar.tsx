import { useState, useContext } from "react";
import { Box } from "@mui/material";
import LoginForm from "./LoginForm";
import UserButton from "./UserButton";
import ThemeToggler from "./ThemeToggler";

//local packages
import { UserContext } from "../UserContext";
import NavAccountMenu from "./NavAccountMenu";
import type { UserContextType } from "../UserContext";

function NavBar() {
  const [open, setOpen] = useState(false);

  const { user } = useContext<UserContextType | null>(UserContext) || {
    user: null,
    resetUser: () => {},
  };

  const handleClose = (reason?: string) => {
    if (reason && reason == "backdropClick") {
      return;
    }
    setOpen(false);
  };
  const closeWithX = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Box
      component="nav"
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: theme.spacing(2),
        padding: theme.spacing(1, 2),
      })}
    >
      <LoginForm
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
        closeWithX={closeWithX}
      />
      {user ? (
        <NavAccountMenu user={user} />
      ) : (
        <UserButton handleClick={handleOpen} />
      )}
      <ThemeToggler />
    </Box>
  );
}

export default NavBar;
