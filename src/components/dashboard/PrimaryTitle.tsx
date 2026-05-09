import React from "react";
import { Box, Typography } from "@mui/material";

function PrimaryTitle({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={(theme) => ({
        position: "sticky",
        top: 0,
        zIndex: 1,
        backdropFilter: "blur(8px)",
        backgroundColor:
          "rgba(var(--mui-palette-background-paperChannel) / 0.85)",
        color: theme.palette.text.primary,
        px: 2,
        py: 1.25,
        mb: 1,
        borderBottom: `1px solid ${theme.palette.divider}`,
      })}
    >
      <Typography
        variant="h6"
        align="center"
        sx={{ fontWeight: 700 }}
      >
        {children}
      </Typography>
    </Box>
  );
}

export default PrimaryTitle;
