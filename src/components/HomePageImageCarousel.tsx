import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box,IconButton, Paper, Typography } from '@mui/material';
import React from 'react';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { useSwipeable } from 'react-swipeable';
 
const images=[
    '/portfolio/Image1.png',
    '/portfolio/Image2.png',
    '/portfolio/Image3.png',
    '/portfolio/Image4.png',
    '/portfolio/Image5.png',
    '/portfolio/Image6.png'
]

function HomePageImageCarousel() {
    const [currentIndex,setCurrentIndex]=React.useState(0);
    React.useEffect(()=>{
    const interval=setInterval(()=>{
        handleNext()
    },3000)
  return ()=>clearInterval(interval)
    },[currentIndex])

    function handleNext(){
        setCurrentIndex(prev=>(prev+1)% images.length)
    }
     function handlePrev(){
        setCurrentIndex(prev=>(prev-1+images.length)%images.length)
     }
     function handleIconTap(index:number){
        setCurrentIndex(index)
     }
    const handlers=useSwipeable({
        onSwipedLeft:handleNext,
        onSwipedRight:handlePrev
    })
  return (
    <>
    <Typography component='h3' sx={{color:'secondary.main', fontSize:'20px' ,mb:2}}>My work</Typography>
    <Box {...handlers} component={Paper}   sx={{
        position: "relative",
        width: "60%",
        minWidth:"400px",
        margin: "auto",
        overflow: "hidden",
        borderRadius: 2,
        textAlign:'center',
        paddingBottom:4,
        minHeight:{xs:'fit-content',sm:"300px",md:'400px',lg:"400px"}


      }} >

        <Box component='img' sx={{width:'80%',maxWidth:'100%', height:'80%', transition:" opacity 0.5s ease-in-out",borderRadius:'5px',objectFit:'contain'}} src={images[currentIndex]} alt='carousel'>
        </Box>

        <IconButton onClick={handlePrev} sx={{position:'absolute',top:'50%',left:{xs:'5px',md:'10px',sm:'5px',lg:'10px'},zIndex:2, transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "secondary.main",fontSize:{xs:'small',sm:'small',md:'large',lg:'large'},
          "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },}}>
         <ChevronLeftIcon/>
        </IconButton>
        <IconButton onClick={handleNext} sx={{position:'absolute',top:'50%',right:{xs:'5px',md:'10px',sm:'5px',lg:'10px'}, transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "secondary.main",fontSize:{xs:'small',sm:'small',md:'large',lg:'large'},
          "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },}}>
        <ChevronRightIcon />
        </IconButton>
      <Box sx={{position:'absolute',bottom:'10px' ,display:'flex' ,gap:1 ,justifyContent:'center',width:'100%'}}>
        {images.map((_,index)=>(
          <IconButton key={index} sx={{color:currentIndex===index?'secondary.main':'inherit'}} onClick={()=>handleIconTap(index)}>
          <RadioButtonCheckedIcon sx={{fontSize:currentIndex===index?'large':'small'}} />
          </IconButton>
        ))}
      </Box>
    </Box>
    </>
  )
}

export default HomePageImageCarousel