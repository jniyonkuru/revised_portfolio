//third party packages
import { Box, Menu, MenuItem } from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  anchorEl: HTMLElement | null;
  id: number;
}
function OptionsMenu({ anchorEl, open, onClose, onEdit, onDelete, id }: Props) {
  function handleEdit(id: number) {
    onEdit(id);
    onClose();
  }

  function handleDelete(id: number) {
    onDelete(id);
    onClose();
  }
  return (
    <Box sx={(theme) => ({ padding: theme.spacing(1, 2) })}>
      <Menu
        open={open}
        onClose={onClose}
        anchorEl={anchorEl}
        slotProps={{
          paper: {
            elevation: 0,
            sx: (theme) => ({
              boxShadow: ` 0 0 1px ${theme.palette.secondary.contrastText}`,
              borderColor: theme.palette.secondary.contrastText,
              backgroundColor: theme.palette.background.default,
              borderRadius: theme.shape.borderRadius,
            }),
          },
        }}
      >
        <MenuItem onClick={() => handleEdit(id)}>Edit</MenuItem>
        <MenuItem onClick={() => handleDelete(id)}>Delete</MenuItem>
      </Menu>
    </Box>
  );
}

export default OptionsMenu;
