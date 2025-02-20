import React from 'react'
import { Button, Icon } from '@mui/material';
import { SvgIconProps } from '@mui/material';

interface Props{
  text:string,
  Icon:React.ComponentType<SvgIconProps>,
  href:string,
  other?:any
}

function CustomButton({Icon,text,href,other}:Props) {
  return (
    <Button  href={href} variant='contained' sx={{color:'#000',backgroundColor:'#fff',mr:2, borderRadius:'8px',...other}} startIcon={<Icon/>}>{text}</Button>
  )
}

export default CustomButton