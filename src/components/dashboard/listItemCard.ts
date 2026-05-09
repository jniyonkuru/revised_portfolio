import type { Theme } from "@mui/material/styles";

// Shared "card" treatment for the project / experience list items so both
// columns stay visually consistent: soft border and subtle elevation.
export const listItemCardSx = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "stretch",
  gap: theme.spacing(1.5),
  padding: theme.spacing(2),
  mb: theme.spacing(1.5),
  borderRadius: 2,
  border: `1px solid ${theme.palette.divider}`,
  // Lighter than the page background so each card visibly lifts off the surface.
  backgroundColor: theme.palette.primary.light,
  boxShadow: theme.shadows[2],
});
