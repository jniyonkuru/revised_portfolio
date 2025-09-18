import React, { useState } from "react";
import { Box, Divider, IconButton, Button, Drawer, Stack } from "@mui/material";
import LoginForm from "./LoginForm";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import UserButton from "./UserButton";
import ThemeToggler from "./ThemeToggler";
import { useLocation } from "react-router-dom";


const drawerWidth = 230;
const navItems = [
  { title: "Home", to: "/" },
  { title: "Dashboard", to: "/dashboard" }
];

interface Props {
  window?: () => Window;
}

function NavBar(props: Props) {

  const { window } = props;
  const [open, setOpen] = useState(false);
  
  const location = useLocation();
  const handleClose = (e: React.SyntheticEvent, reason?: string) => {
    e.preventDefault();
    if (reason && reason == "backdropClick") {
      return;
    }
    setOpen(false);
  };
  const closeWithX = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Box
        component="div"
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        {/* <Logo sx={{ fontSize: 40, ml: 2 }} /> */}
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ color: "secondary.main",  }}
        >
          <MenuOpenIcon />
        </IconButton>
      </Box>
      <Divider sx={{ mt: 3 }} />
      <Stack direction="column" sx={{ textAlign: "start" }}>
        {navItems.map((item, index) => (
          <Button
            key={`${item}-${index}`}
            sx={{
              backgroundColor:location.pathname===item.to?"black":"transparent",
              color: "",
              justifyContent: "flex-start",
              pl: 3,
              height: "100%",
              borderRadius: "inherit",
              "&:hover": { backgroundColor: "grey" },
            }}
          >
            {item.title}
          </Button>
        ))}
      </Stack>
    
    </Box>
  );
  const container = window !== undefined ? window().document.body : undefined;
  return (
    <Box>
      <Box component="nav" sx={{ marginInline: "auto", p: "8px 15px"}}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <LoginForm
            handleClose={handleClose}
            handleOpen={handleOpen}
            open={open}
            closeWithX={closeWithX}
          />
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { md: "none", sm: "none", lg: "none" },
              color: "secondary.main",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: { sm: "center" },
              alignItems: { sm: "center" },
              backgroundColor: "transparent",
              height: "40px",
              width: "fit-content",
              gap: "10px",
              minWidth: "70%"
            
            }}
          >
            {navItems.map((item, index) => (
              <Button
                href={item.to}
                key={`${item}-${index}`}
                sx={{
                  color:location.pathname===item.to? "black" :"grey.500",
                  height: "100%", 
                  borderRadius: "inherit",
                }}
              >
                {item.title}
              </Button>
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
              display: { xs: "block", sm: "none", md: "none", lg: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)",
              },
            }}
          >
            {drawer}
          </Drawer>
          <Box sx={{display:'flex',gap:2, alignItems:'flex-start'}}>
          <UserButton/>
          <ThemeToggler/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default NavBar;
