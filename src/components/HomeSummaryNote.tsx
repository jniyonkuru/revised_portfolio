import { Box, Typography } from '@mui/material'

function HomeSummaryNote() {
  return (
    <Box sx={{padding:2}}>
      <Typography variant='h5' sx={{fontWeight:'bold' ,fontSize:"1.2rem",color:"text.primary"}}>
         Niyonkuru Jacques
      </Typography>
      <Typography variant='body1' sx={{color:"grey.500"}}>
        Full-stack software engineer based in Kigali, Rwanda.
      </Typography>
    </Box>
  )
}

export default HomeSummaryNote