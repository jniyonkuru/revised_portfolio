import React ,{useState} from "react";
import { Box ,Divider, IconButton, Button,Drawer, Stack} from "@mui/material";
import LoginForm from "./LoginForm";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Logo from "./Logo";


const drawerWidth = 240;
const navItems = ['Home', 'About me', 'Projects','Login'];

interface Props{
    window?:()=>Window
}

 function NavbarHome(props:Props) {
    const {window}=props;
    const [open, setOpen]=useState(false);
    const handleClose=(e:React.SyntheticEvent,reason?:string)=>{
      e.preventDefault();
       if( reason&&reason=='backdropClick'){
           return;
       }
       setOpen(false)
    }
     const closeWithX=()=>{
       setOpen(false)
     }
    const handleOpen=()=>{
       setOpen(true)
    }

    const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
    const drawer=(
        <Box  sx={{textAlign:'center'}}>
        <Box component='div' sx={{display:"flex", justifyContent:'space-between'}}>
            <Logo sx={{fontSize:40,ml:2}} />
            <IconButton onClick={handleDrawerToggle} sx={{color:'secondary.main'}}>
                <MenuOpenIcon/>
            </IconButton>
        </Box>
        <Divider sx={{mt:3}}/>
        <Stack direction='column' sx={{textAlign:'start'}} >
         {navItems.map((item,index)=>(
              <Button key={`${item}-${index}`} onClick={item==="Login"?handleOpen:undefined} sx={{backgroundColor:"transparent",color:"#fff" ,justifyContent: "flex-start" ,pl:3,
                '&:hover':{color:'secondary.main'}, 
               }}>
                {item}
              </Button>
    
         ))}
        </Stack>
        </Box>
    )
    const container= window !==undefined? window().document.body:undefined
   return (

    <Box >
        <Box component='nav' sx={{marginInline:'auto',p:'15px' }}>
        <Box sx={{display:'flex', alignItems:'center',justifyContent:'space-between'}}>
        <LoginForm handleClose={handleClose} handleOpen={handleOpen} open={open} closeWithX={closeWithX}/>
            <IconButton onClick={handleDrawerToggle} sx={{mr:2,display:{md:'none', sm:'none',lg:'none'},color:'secondary.main'}}>
                <MenuIcon/>
            </IconButton>

            <Logo sx={{display:{xs:'none' ,sm:'block' ,md:'block', fontSize:56, mr:'auto'}}} />
            <Box sx={{display:{xs:'none' ,sm:'block',md:'block'}}}>
                {navItems.map((item,index)=>(
                    <Button  key={`${item}-${index}`} onClick={item==="Login"?handleOpen:undefined}  sx={{color:'#fff','&:hover':{color:'secondary.main'}}}>{item}</Button>
                ))}
            </Box>
        
        <Drawer
          container={container}
          hideBackdrop
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' ,md:'none',lg:'none'},
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor:"rgba(255,255,255,0.2)", backdropFilter:'blur(10px)' },
          }}
        >
          {drawer}
        </Drawer>
    
        </Box>
        </Box>
    </Box>
    
   )
 }
 
 export default NavbarHome