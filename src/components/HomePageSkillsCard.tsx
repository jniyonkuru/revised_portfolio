
import { Typography ,Card ,CardMedia,CardContent, CardActions, Button} from '@mui/material'


interface Props{
  mediaUrl:string,
  description:string,
  tech:string[],
  projectUrl:string
  
   
}
function HomePageSkillsCard({mediaUrl,description,projectUrl}:Props) {
  return (
    <Card  elevation={0} sx={{maxWidth:{xs:'100%',md:220},display:'flex', flexDirection:'column',justifyContent:"space-between" ,background:'transparent', borderRadius:'16px'}}>
    <CardMedia
    component='img'
    height='180'
    image={mediaUrl}
    sx={{boxShadow:1, borderRadius:'16px'}}
    
    />
   <CardContent>
    <Typography sx={{color:'primary.contrastText'}}>{description}</Typography>
   </CardContent>
   <CardActions>
    <Button href={projectUrl} variant='outlined' sx={{color:'primary.main',fontSize:'0.7rem', backgroundColor:"#EEEEEE",borderRadius:'16px'}}>
       View
    </Button>
   </CardActions>
  
    </Card>
  )
}

export default HomePageSkillsCard