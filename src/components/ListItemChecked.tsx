
import { ListItem,ListItemIcon, ListItemText} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function ListItemChecked({text}:{text:string}) {
  return (
    <ListItem disablePadding  >
      <ListItemIcon sx={{minWidth:"20px",mr:1}}>
        <CheckCircleOutlineIcon fontSize='small' sx={{color:"text.primary"}} />
      </ListItemIcon>
      <ListItemText sx={{color:"text.primary"}}>{text}</ListItemText>
      </ListItem>
  )
}

export default ListItemChecked