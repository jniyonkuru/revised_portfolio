
import { Box, Typography} from '@mui/material';
import CustomButton from './CustomButton';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DescriptionIcon from '@mui/icons-material/Description';

function HomePageFooter() {
  return (
       <Box sx={{textAlign:'center',color:'black'}}>
        <Typography variant='h5' sx={{fontWeight:'bold', color:'text.primary'}}>Get In Touch</Typography>
        <Typography sx={{my:2, color:'text.primary'}}>Let's connect and bring your projects to life.</Typography>

        <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, justifyContent:"center"}}>
        <CustomButton text='LinkedIn' href='https://www.linkedin.com/in/jacques-niyonkuru-55b12b180/' Icon={MailOutlineIcon}/>
        <CustomButton href='mailto:niyonkurujacques@gmail.com'  text='Email'  Icon={MailOutlineIcon}/>
        <CustomButton href='/Jacques_Resume.pdf' other={{download:'Resume.pdf'}} text='Resume'  Icon={DescriptionIcon}/>
        </Box>
        </Box>

  )
}

export default HomePageFooter