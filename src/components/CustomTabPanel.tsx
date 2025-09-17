import React from "react";
import { Box } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

function CustomTabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <div hidden={index !== value} {...other}>
      {index === value && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

export default CustomTabPanel;
