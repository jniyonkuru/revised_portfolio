import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton } from '@mui/material';

function ThemeToggler() {
  return (
    <IconButton sx={{boxShadow:1,background:"white","&:hover":{background:"#EEEEEE"}}}>
        <DarkModeIcon  fontSize='small'  color='secondary'/>
    </IconButton>
  )
}

export default ThemeToggler