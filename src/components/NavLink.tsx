//third party packages

import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material";

const SytledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create(["background-color", "color"]),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  "&.active": {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary.light + "20",
    fontWeight: "bold",
  },
}));

interface Props {
  to: string;
  children: React.ReactNode;
}

const NavigationLink: React.FC<Props> = ({ to, children }: Props) => {
  return (
    <SytledNavLink to={to} style={{ textDecoration: "" }}>
      {children}
    </SytledNavLink>
  );
};

export default NavigationLink;
