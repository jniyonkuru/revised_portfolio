import { Box, Typography, IconButton } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


function HomeSummaryNote() {
  return (
    <Box sx={{display:'flex',flexDirection:'column', gap:2,padding:"10px 20px",textAlign:'center'}}>
    <Typography variant={window.innerWidth<600?'h5':'h4'} sx={{color:'#fff', maxWidth:'60%',marginInline:'auto'}}>
      Building <Box component='span' sx={{  fontSize: "40px",fontFamily:'Irish Grover',
        fontWeight: "bold",
        backgroundImage: "linear-gradient(45deg, #0baed4, #3c89f5)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",}}>modern web applications </Box>with a focus on aesthetics, functionality and accessibility.
    </Typography> 
    <Box sx={{display:'flex',gap:2, justifyContent:'center',my:4}}>
    <IconButton href='https://www.linkedin.com/in/jacques-niyonkuru-55b12b180/' sx={{
        backgroundColor: "#1976d2",
        color: "white", 
        "&:hover": {
          backgroundColor: "#1259a5",
        },
        borderRadius: "12px",
        padding: "5px", 
      }}>
      <LinkedInIcon/>
    </IconButton>
    <IconButton href="https://github.com/jniyonkuru/" sx={{
        backgroundColor: "#1976d2",
        color: "white", 
        "&:hover": {
          backgroundColor: "#1259a5",
        },
        borderRadius: "12px",
        padding: "5px", 
      }}>
      <GitHubIcon/>
    </IconButton>
    </Box>
 
    </Box>
  )
}

export default HomeSummaryNote