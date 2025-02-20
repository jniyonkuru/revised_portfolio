import NavbarHome from '../components/NavbarHome';
import HomeSummaryNote from '../components/HomeSummaryNote'
import HomeImage from '../components/HomeImage';
import HomePageSkillsCardsCollection from '../components/HomePageskillsCardsCollection';
import HomePageFooter from '../components/HomePageFooter';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import {Box, Typography, Divider} from '@mui/material';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import  ExperienceTimeline from "../components/ExperienceTimeline"
import PersonIcon from '@mui/icons-material/Person';

function HomePage() {
  return (
    <Box sx={{backgroundImage:'url("/background1.jpg")', backgroundSize: "cover",
      backgroundPosition: "center" , padding:"30px 50px"}}>
        <header>
            <NavbarHome/>
        </header>
        <main>
        <Divider sx={{ boxShadow: "0px 0.5px 0px rgba(255, 255, 255, 0.5)"}} />
          <Box sx={{textAlign:'center',pt:5}}>
          <HomeImage/>
            <HomeSummaryNote/>
            </Box>
            <Divider sx={{ boxShadow: "0px 0.5px 0px rgba(255, 255, 255, 0.5)",my:6}} />
            <Box >
             
            <Box sx={{width:{xs:'100%',lg:'50%'}}}>
            <Box sx={{display:'flex',alignItems:'center'}}>
              <FolderOpenIcon sx={{color:'#fff',fontSize:'40px'}} />
              <Typography component='span' variant='h5' sx={{color:'#fff',textAlign:'center',ml:2}}>Projects</Typography>
            </Box>
            </Box>
             <HomePageSkillsCardsCollection/>
            </Box>
              <Divider sx={{ boxShadow: "0px 0.5px 0px rgba(255, 255, 255, 0.5)",my:6} }/>
            <Box >
              <Box sx={{display:'flex',alignItems:'center'}}>
              <BusinessCenterIcon  sx={{color:'#fff',fontSize:'40px'}}/>
              <Typography component='span' variant='h5' sx={{color:'#fff',textAlign:'center',ml:2}}>Experience</Typography>
              </Box>
               <Box>
                <ExperienceTimeline/>
               </Box>
            </Box>
            <Divider sx={{ boxShadow: "0px 0.5px 0px rgba(255, 255, 255, 0.5)",my:6}} />
 
            <Box>
            <Box  sx={{display:'flex',alignItems:'center'}}>
              < PersonIcon sx={{color:'#fff',fontSize:'40px'}} />
              <Typography component='span' variant='h5' sx={{color:'#fff',textAlign:'center',ml:2}}>About me</Typography>
            </Box>
            <Typography component='p' sx={{color:'#fff',m:2}}>
            I’m Jacques Niyonkuru, an aspiring software engineer passionate about building scalable and user-friendly web applications. With a strong foundation in JavaScript, React, Node.js, PostgreSQL, MongoDB, and GraphQL, I specialize in full-stack development and enjoy solving complex problems with technology.
            Previously, I worked in healthcare, which fueled my passion for crafting technology-driven solutions that positively  impact lives. This experience drives my commitment to building meaningful and impactful software.
            </Typography>
            </Box>
            <Divider sx={{ boxShadow: "0px 0.5px 0px rgba(255, 255, 255, 0.5)",my:6}} />
            <Box >
            <HomePageFooter/>
            </Box>
        </main>
    </Box>
  )
}

export default HomePage