
import { ListItem,ListItemIcon, ListItemText} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function ListItemChecked({text}:{text:string}) {
  return (
    <ListItem>
      <ListItemIcon>
        <CheckCircleOutlineIcon sx={{color:"secondary.main"}} />
      </ListItemIcon>
      <ListItemText sx={{color:"black"}}>{text}</ListItemText>
      </ListItem>
  )
}

export default ListItemChecked