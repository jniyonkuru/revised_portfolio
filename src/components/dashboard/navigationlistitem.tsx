//third party packages
import { Box, Icon, Typography } from "@mui/material";

interface Props {
  text: string;
  icon: React.ReactNode;
}

const NavListItem: React.FC<Props> = ({ text, icon }: Props) => {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        gap: theme.spacing(1),
        padding: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
      })}
    >
      <Icon>{icon}</Icon>
      <Typography>{text}</Typography>
    </Box>
  );
};

export default NavListItem;
