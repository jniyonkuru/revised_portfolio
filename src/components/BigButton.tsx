 import  React from 'react'
import { Button ,SvgIconProps} from '@mui/material'

interface  Props{
    text:string,
    clickHandler:()=>void,
    backgroundColor:string,
    Icon:React.ComponentType<SvgIconProps>,

}

function BigButton( { text,clickHandler,backgroundColor,Icon}:Props) {
  return (
    <Button  onClick={clickHandler} startIcon={<Icon/>}  sx={{minWidth:'100px',padding:'15px 50px',borderRadius:4 ,backgroundColor:backgroundColor,boxShadow:2} }>
    {text}
    </Button>
  )
}

export default BigButton