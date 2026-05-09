
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CircleCheck } from 'lucide-react';

function ListItemChecked({text}:{text:string}) {
  return (
    <ListItem disablePadding>
      <ListItemIcon sx={{ minWidth: "20px", mr: 1, color: "secondary.main" }}>
        <CircleCheck size={16} />
      </ListItemIcon>
      <ListItemText sx={{ color: "text.primary" }}>{text}</ListItemText>
    </ListItem>
  )
}

export default ListItemChecked