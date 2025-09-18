import { IconButton} from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function UserButton() {
  return (
    <IconButton sx={{boxShadow:1, background:"white" ,'&:hover':{background:"#EEEEEE" ,transform:"scale(1.05)", transition:"transform 0.5s ease-in-out"}}}>
     <PersonOutlineIcon fontSize="small" sx={{color:'black'}}/>
    </IconButton>
  )
}

export default UserButton