import React from 'react'
import { Button } from '@mui/material';

interface Props {
  text: string;
  icon: React.ReactNode;
  href: string;
  external?: boolean;
  other?: Record<string, unknown>;
}

function CustomButton({ icon, text, href, external, other }: Props) {
  return (
    <Button
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      variant="outlined"
      startIcon={icon}
      sx={(theme) => ({
        color: theme.palette.text.primary,
        borderColor: theme.palette.divider,
        borderRadius: 2,
        textTransform: "none",
      })}
      {...other}
    >
      {text}
    </Button>
  );
}

export default CustomButton
