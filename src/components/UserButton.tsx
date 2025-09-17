import { IconButton} from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function UserButton() {
  return (
    <IconButton sx={{boxShadow:1, background:"white" ,'&:hover':{background:"#EEEEEE"}}}>
     <PersonOutlineIcon fontSize="small"  color='secondary'/>
    </IconButton>
  )
}

export default UserButton