//third party  packages
import Navbar from "../Navbar";
import HomeSummaryNote from "../HomeSummaryNote";
import HomeImage from "../ProfileImage";
import { Box, Stack, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
//local packages
import NavigationLink from "../NavLink";
function HomePage() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "background.default",
        padding: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component="header"
        sx={{
          background: `linear-gradient(90deg, ${theme.palette.primary.light} , ${theme.palette.primary.main})`,
          width: "100%",
          height: "70px",
          borderRadius: 2,
        }}
      >
        <Navbar />
      </Box>
      <Box
        component="main"
        sx={{ padding: { xs: "5px 10px", md: "10px 20px" } }}
      >
        <Box
          component="section"
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          <Box
            sx={{
              padding: 1,
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
              width: "fit-content",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              mt: "-60px",
            }}
          >
            <HomeImage />
          </Box>
          <Box sx={{ alignSelf: "center" }}>
            <HomeSummaryNote />
          </Box>
        </Box>
        <Box component="section">
          <Box>
            <Stack
              direction="row"
              spacing={2}
              sx={(theme) => ({ padding: theme.spacing(1) })}
            >
              <NavigationLink to="/">Projects</NavigationLink>
              <NavigationLink to="/experience">Experience</NavigationLink>
              <NavigationLink to="/about">About</NavigationLink>
              <NavigationLink to="/contact">Contact</NavigationLink>
            </Stack>
          </Box>
          <Divider
            sx={{ boxShadow: "0px 0.5px 0px rgba(255, 255, 255, 0.5)", my: 1 }}
          />
        </Box>

        <Box sx={{ padding: 2 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
