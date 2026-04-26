//third party packages
import React from "react";
import { Stack } from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SettingsSuggestSharpIcon from "@mui/icons-material/SettingsSuggestSharp";

//local packages
import NavigationLink from "../NavLink";
import NavListItem from "./navigationlistitem";

const navitems = [
  { label: "Dashboard", Icon: <DashboardOutlinedIcon />, to: "/dashboard" },
  { label: "Settings", Icon: <SettingsSuggestSharpIcon />, to: "/dashboard" },
];

const NavList: React.FC = () => {
  return (
    <Stack spacing={1}>
      {navitems.map(
        ({
          label,
          Icon,
          to,
        }: {
          label: string;
          Icon: React.ReactNode;
          to: string;
        }) => (
          <NavigationLink to={to} key={label}>
            <NavListItem text={label} icon={Icon} />
          </NavigationLink>
        ),
      )}
    </Stack>
  );
};

export default NavList;
