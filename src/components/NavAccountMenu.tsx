//third party packages
import React, { useContext, useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ChevronDown, LayoutDashboard, LogOut, UserRound } from "lucide-react";

//local packages
import { UserContext } from "../UserContext";
import type { User } from "../types";

interface Props {
  user: User;
}

const NavAccountMenu: React.FC<Props> = ({ user }) => {
  const navigate = useNavigate();
  const { resetUser } = useContext(UserContext) || {
    user: null,
    resetUser: () => {},
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleDashboard = () => {
    handleClose();
    navigate("/dashboard");
  };

  const handleLogout = () => {
    handleClose();
    localStorage.removeItem("token");
    resetUser();
    navigate("/");
  };

  const capitalize = (value?: string) =>
    value ? value.charAt(0).toUpperCase() + value.slice(1) : "";

  const displayName = capitalize(user.user_name);
  const initials = `${user.first_name?.[0] ?? ""}${
    user.last_name?.[0] ?? ""
  }`.toUpperCase();

  return (
    <>
      <Box
        onClick={handleOpen}
        role="button"
        aria-label="Open account menu"
        aria-controls={open ? "nav-account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          gap: theme.spacing(1),
          padding: theme.spacing(0.5, 1),
          borderRadius: 1,
          cursor: "pointer",
          color: theme.palette.text.primary,
          transition: theme.transitions.create("background-color"),
          "&:hover": { backgroundColor: theme.palette.action.hover },
        })}
      >
        <Avatar
          sx={(theme) => ({
            width: 30,
            height: 30,
            fontSize: 13,
            fontWeight: theme.typography.fontWeightBold,
            color: theme.palette.secondary.main,
            bgcolor: "rgba(var(--mui-palette-secondary-mainChannel) / 0.18)",
            border:
              "1px solid rgba(var(--mui-palette-secondary-mainChannel) / 0.30)",
          })}
        >
          {initials || <UserRound size={16} />}
        </Avatar>
        <Typography sx={{ fontWeight: "bold", display: { xs: "none", sm: "block" } }}>
          {displayName}
        </Typography>
        <ChevronDown
          size={16}
          style={{
            transition: "transform 150ms ease",
            transform: open ? "rotate(180deg)" : "none",
          }}
        />
      </Box>

      <Menu
        id="nav-account-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{
          paper: {
            elevation: 6,
            sx: (theme) => ({
              mt: 0.5,
              minWidth: 180,
              borderRadius: 2,
              border: `1px solid ${theme.palette.divider}`,
              "& .MuiMenuItem-root": {
                gap: 1,
                mx: 0.5,
                my: 0.25,
                borderRadius: 1,
                fontSize: theme.typography.body2.fontSize,
              },
              "& .MuiListItemIcon-root": { minWidth: 0, color: "inherit" },
            }),
          },
        }}
      >
        <MenuItem onClick={handleDashboard}>
          <ListItemIcon>
            <LayoutDashboard size={16} />
          </ListItemIcon>
          Dashboard
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={handleLogout}
          sx={(theme) => ({ color: theme.palette.error.main })}
        >
          <ListItemIcon>
            <LogOut size={16} />
          </ListItemIcon>
          Log out
        </MenuItem>
      </Menu>
    </>
  );
};

export default NavAccountMenu;
