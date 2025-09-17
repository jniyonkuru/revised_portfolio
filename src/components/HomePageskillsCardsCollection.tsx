import { Box } from '@mui/material'
import HomePageSkillsCard from './HomePageSkillsCard'
const projects=[

  {
    mediaUrl:'/portfolio/Image2.png' ,
    projectUrl:"https://jniyonkuru.github.io/Country-App/",
    description:"Country App that fetches data from API and display country along their flags , it has dark and light mode ",
    tech:['html','css','javascript']
  },
  {
    mediaUrl:'/portfolio/Image3.png',
    projectUrl:"https://jniyonkuru.github.io/Etch-a-Sketch/",
    description:"Etch a sketch is a simple App that displays Canvas from which a user can Write , with a mouse click, user can also customize font weight",
    tech:['html','css','javascript']
  },
  {
    mediaUrl:'/portfolio/Image4.png',
    projectUrl:"https://jniyonkuru.github.io/moshify/",
    description:"A Responsive landing page of an imaginary web page .I coded this along a tutor",
    tech:['html','css','javascript']
  },
  {
    mediaUrl:'/portfolio/Image5.png',
    projectUrl:"https://jniyonkuru.github.io/rock-scisor-paper/",
    description:"Rock Paper scissor is a simple game , a user plays with computer, makes one choice at time.The winner is proclaimed after 5 attempts ",
    tech:['html','css','javascript']
  },
  {
    mediaUrl:'/portfolio/Image6.png' ,
    projectUrl:"https://jniyonkuru.github.io/whatsapp-interface/",
    description:"This is a clone of  whatsapp web interface.It is not functional ,it is simply a User interface",
    tech:['html','css']
  }
  
]
function HomePageSkillsCardsCollection() {
  return (
    <Box sx={{display:'flex', flexWrap:'wrap', gap:2,padding:4}}>

      {projects.map((item,index)=>(
        <HomePageSkillsCard key={`${item}-${index}`} {...item}/>
      ))}
    </Box>
  )
}

export default HomePageSkillsCardsCollection