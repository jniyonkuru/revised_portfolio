import { Box, Typography } from "@mui/material";
import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
}

// Shared header for the public tabs (Projects / Experience / About / Contact)
// so they all share one consistent icon + title treatment.
function SectionHeader({ icon: Icon, title }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        color: "text.primary",
        mb: 1,
      }}
    >
      <Icon size={26} />
      <Typography component="h2" variant="h5" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
    </Box>
  );
}

export default SectionHeader;
