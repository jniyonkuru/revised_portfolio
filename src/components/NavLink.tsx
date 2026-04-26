//third party packages

import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material";


const SytledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  fontSize: "12px",
  fontWeight: theme.typography.fontWeightLight,
  padding: theme.spacing(1,2),
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create(["background-color", "color"],{duration:theme.transitions.duration.standard,easing:'linear'}),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  "&.active": {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary.main ,
  },
}));

interface Props {
  to: string;
  children: React.ReactNode;
}

const NavigationLink: React.FC<Props> = ({ to, children }: Props) => {
  return (
    <SytledNavLink to={to}>
      {children}
    </SytledNavLink>
  );
};

export default NavigationLink;
