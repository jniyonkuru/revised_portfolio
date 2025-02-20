
import { Box, Typography} from '@mui/material';
import CustomButton from './CustomButton';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DescriptionIcon from '@mui/icons-material/Description';

function HomePageFooter() {
  return (
       <Box sx={{textAlign:'center',color:'white'}}>
        <Typography variant='h4'>Get In Touch</Typography>
        <Typography sx={{my:2}}>Let's connect and bring your projects to life.</Typography>
        <CustomButton text='LinkedIn' href='https://www.linkedin.com/in/jacques-niyonkuru-55b12b180/' Icon={MailOutlineIcon}/>
        <CustomButton href='mailto:niyonkurujacques@gmail.com'  text='Email'  Icon={MailOutlineIcon}/>
        <CustomButton href='/Jacques_Resume.pdf' other={{download:'Resume.pdf'}} text='Resume'  Icon={DescriptionIcon}/>
        </Box>

  )
}

export default HomePageFooter