import React from 'react'
import { Button} from '@mui/material';
import { SvgIconProps } from '@mui/material';

interface Props{
  text:string,
  Icon:React.ComponentType<SvgIconProps>,
  href:string,
  other?:Record<string,any>
}

function CustomButton({Icon,text,href,other}:Props) {
  return (
    <Button  href={href} variant='contained' sx={{color:'#000',backgroundColor:'#EEEEEE',mr:2, borderRadius:'8px',mb:3,...other}} startIcon={<Icon/>}>{text}</Button>
  )
}

export default CustomButton