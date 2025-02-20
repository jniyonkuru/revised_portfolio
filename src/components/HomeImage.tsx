import { Box } from '@mui/material'
import React from 'react'

function HomeImage() {
  return (
    <Box component='img' src='/me.jpg' alt="Random"
    sx={{
    width:'200px',
    height:'200px',

      borderRadius: "50%",
      boxShadow:4,
      border:'1px solid white',
      p:'2px'
      
    }}
></Box>
  )
}

export default HomeImage