
import { ListItem,ListItemIcon, ListItemText} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function ListItemChecked({text}:{text:string}) {
  return (
    <ListItem>
      <ListItemIcon>
        <CheckCircleOutlineIcon sx={{color:"text.primary"}} />
      </ListItemIcon>
      <ListItemText sx={{color:"text.primary"}}>{text}</ListItemText>
      </ListItem>
  )
}

export default ListItemChecked