import { useState, useContext, useEffect } from "react";
import { Box} from "@mui/material";
import LoginForm from "./LoginForm";
import UserButton from "./UserButton";
import ThemeToggler from "./ThemeToggler";

//local packages
import { UserContext } from "../UserContext";
import NavigationLink from "./NavLink";
import { User } from "../types";
import type { UserContextType } from "../UserContext";


function NavBar() {
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const {user}= useContext<UserContextType|null>(UserContext) || {user:null, resetUser:()=>{}};
  
  useEffect(() => { 
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  }, [user]);



  const handleClose = ( reason?: string) => {
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

  const handleUserButtonClick = () => {
    setOpen(true)
  }

  return (
    <Box>
      <Box component="nav" sx={(theme) => ({ padding: theme.spacing(1, 2) })}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <LoginForm
            handleClose={handleClose}
            handleOpen={handleOpen}
            open={open}
            closeWithX={closeWithX}
          />
        </Box>
        <Box
          sx={(theme) => ({
            display: "flex",
            gap: theme.spacing(2),
            justifyContent: "flex-end",
            padding: theme.spacing(1, 2),
          })}
        >
          {currentUser ? (
            <NavigationLink to="/dashboard">
              <Box
                sx={{
                  fontWeight: "bold",
                }}
              >
                {currentUser.user_name.charAt(0).toUpperCase() +
                  currentUser.user_name.substring(1)}
              </Box>
            </NavigationLink>
          ) : (
            <UserButton handleClick={handleUserButtonClick} />
          )}
          <ThemeToggler />
        </Box>
      </Box>
    </Box>
  );
}

export default NavBar;
