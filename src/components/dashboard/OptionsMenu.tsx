//third party packages
import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import { Pencil, Trash2 } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  anchorEl: HTMLElement | null;
  id: number;
}
function OptionsMenu({ anchorEl, open, onClose, onEdit, onDelete, id }: Props) {
  const handleEdit = () => {
    onEdit(id);
    onClose();
  };

  const handleDelete = () => {
    onDelete(id);
    onClose();
  };
  return (
    <Menu
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      slotProps={{
        paper: {
          elevation: 6,
          sx: (theme) => ({
            mt: 0.5,
            minWidth: 160,
            borderRadius: 2,
            border: `1px solid ${theme.palette.divider}`,
            backgroundColor: theme.palette.background.paper,
            "& .MuiMenuItem-root": {
              gap: 1,
              mx: 0.5,
              my: 0.25,
              borderRadius: 1,
              fontSize: theme.typography.body2.fontSize,
            },
            "& .MuiListItemIcon-root": {
              minWidth: 0,
              color: "inherit",
            },
          }),
        },
      }}
    >
      <MenuItem onClick={handleEdit}>
        <ListItemIcon>
          <Pencil size={16} />
        </ListItemIcon>
        Edit
      </MenuItem>
      <MenuItem
        onClick={handleDelete}
        sx={(theme) => ({ color: theme.palette.error.main })}
      >
        <ListItemIcon>
          <Trash2 size={16} />
        </ListItemIcon>
        Delete
      </MenuItem>
    </Menu>
  );
}

export default OptionsMenu;
