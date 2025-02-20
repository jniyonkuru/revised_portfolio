import React, { useState } from "react";
import { Box, Modal, Backdrop, Fade, TextField, Button, Typography, InputAdornment, IconButton } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface Props{
  open:boolean,
  handleClose:(e:React.SyntheticEvent)=>void,
  handleOpen:()=>void,
  closeWithX:()=>void,
}

const style={
  width:{xs:300,md:400},
  position:'absolute',
  top:'50%',
  left:'50%',
   transform:'translate(-50%,-50%)',
   bgcolor:'background.paper',
   padding:4,
   outline:0,
   borderRadius:"5px"


}

const LoginForm = ({open,handleClose ,closeWithX}:Props) => {

  const [showPassword,setShowPassword]=useState(false);

 const  handleShowPassword=()=>{
       setShowPassword((prev)=>!prev)
  }

   return (
   
    <Modal
     open={open}
     onClose={handleClose}
     closeAfterTransition
     aria-labelledby="login-modal"
     aria-describedby="login-modal-description"
     slots={
       {backdrop:Backdrop}
     }
     slotProps={{
      backdrop:{
        timeout:1000
      }
     }}
    >
      <Fade in={open}>
    <Box sx={{...style}}>
      <IconButton sx={{position:'absolute', top:2, right:2}} onClick={closeWithX}>
        <ClearIcon></ClearIcon>
      </IconButton>
    <Typography>Login</Typography>
     <TextField  margin="dense" fullWidth label="email" size='small' required/>
     <TextField  margin="dense" fullWidth type={showPassword?'text':'password'} label="password" size='small' required slotProps={{
      input:{
        endAdornment:(
          <InputAdornment position="end">
            <IconButton onClick={handleShowPassword}>
              {showPassword?<VisibilityOff/>:<Visibility/>}
            </IconButton>
          </InputAdornment>
        )
    }
     }}/>
     <Button sx={{color:"white", backgroundColor:'secondary.main' ,mt:1}}>Login</Button>
    </Box>
    </Fade>
    </Modal>

);
};

export default LoginForm;
