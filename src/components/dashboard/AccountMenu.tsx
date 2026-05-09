//third party packages
import React, { useContext, useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  LogOut,
  Settings,
  UserRound,
} from "lucide-react";

//local packages
import { UserContext } from "../../UserContext";

const AccountMenu: React.FC = () => {
  const navigate = useNavigate();
  const { user, resetUser } = useContext(UserContext) || {
    user: null,
    resetUser: () => {},
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    handleClose();
    localStorage.removeItem("token");
    resetUser();
    navigate("/");
  };

  const capitalize = (value?: string) =>
    value ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() : "";

  const fullName = user
    ? `${capitalize(user.first_name)} ${capitalize(user.last_name)}`.trim()
    : "Account";
  const initials = user
    ? `${user.first_name?.[0] ?? ""}${user.last_name?.[0] ?? ""}`.toUpperCase()
    : "";

  return (
    <>
      <Tooltip title="Account">
        <Box
          onClick={handleOpen}
          role="button"
          aria-label="Open account menu"
          aria-controls={open ? "account-menu" : undefined}
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
              width: 32,
              height: 32,
              fontSize: 14,
              fontWeight: theme.typography.fontWeightBold,
              color: theme.palette.secondary.main,
              bgcolor: "rgba(var(--mui-palette-secondary-mainChannel) / 0.18)",
              border:
                "1px solid rgba(var(--mui-palette-secondary-mainChannel) / 0.30)",
            })}
          >
            {initials || <UserRound size={18} />}
          </Avatar>
          <Typography
            noWrap
            sx={{ flex: 1, minWidth: 0, display: { xs: "none", md: "block" } }}
          >
            {fullName}
          </Typography>
          <ChevronDown
            size={16}
            style={{
              transition: "transform 150ms ease",
              transform: open ? "rotate(180deg)" : "none",
            }}
          />
        </Box>
      </Tooltip>

      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "bottom", horizontal: "right" }}
        slotProps={{
          paper: {
            elevation: 6,
            sx: { mt: -1, minWidth: 220, borderRadius: 2, overflow: "visible" },
          },
        }}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="subtitle2" noWrap fontWeight="bold">
            {fullName}
          </Typography>
        </Box>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon sx={{ color: "inherit" }}>
            <UserRound size={18} />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon sx={{ color: "inherit" }}>
            <Settings size={18} />
          </ListItemIcon>
          Settings
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={handleLogout}
          sx={(theme) => ({ color: theme.palette.error.main })}
        >
          <ListItemIcon sx={{ color: "inherit" }}>
            <LogOut size={18} />
          </ListItemIcon>
          Log out
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountMenu;
