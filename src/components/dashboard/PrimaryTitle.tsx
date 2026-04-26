import React from "react";
import { Box, Typography } from "@mui/material";

function PrimaryTitle({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={(theme) => ({
        position: "sticky",
        top: 0,
        zIndex: 1,
        backdropFilter: "blur(10px)",
        backgroundColor: theme.palette.primary.main ,
        color: theme.palette.text.primary,
        p: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
      })}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={(theme) => ({
          fontWeight: theme.typography.fontWeightBold,
          textAlign: "center",
        })}
      >
        {children}
      </Typography>
    </Box>
  );
}

export default PrimaryTitle;
