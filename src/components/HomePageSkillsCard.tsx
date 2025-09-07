
import { Box, Typography ,Card ,CardActionArea,CardMedia,CardContent,Chip, CardActions, Button} from '@mui/material'


interface Props{
  mediaUrl:string,
  description:string,
  tech:string[],
  projectUrl:string
  
   
}
function HomePageSkillsCard({mediaUrl,tech,description,projectUrl}:Props) {
  return (
    <Card  sx={{maxWidth:{xs:'100%',md:300} ,background:'transparent', boxShadow:"0px 0px 1px #F5F5F5",p:1, borderRadius:'8px'}}>
    <CardActionArea>
    <CardMedia
    component='img'
    height='190'
    image={mediaUrl}
    sx={{borderRadius:'8px'}}
    />
   <CardContent sx={{background:'rgba(0,0,0,0.2)'}}>
    <Box>
    {tech.map((item,index)=>(
      <Chip key={`${item}-${index}`} sx={{color:'#fff',backgroundColor:index%2==0?'#19264b':'#122f18'}} label={item} />
    ))}
    </Box>
    <Typography sx={{color:'grey.500'}}>{description}</Typography>
   </CardContent>
   <CardActions>
    <Button href={projectUrl} variant='contained' sx={{color:'#fff', backgroundColor:"secondary.main",borderRadius:'8px'}}>
       View
    </Button>
   </CardActions>
   </CardActionArea>
    </Card>
  )
}

export default HomePageSkillsCard