//third party  packages
import Navbar from "../Navbar";
import HomeSummaryNote from "../HomeSummaryNote";
import HomeImage from "../ProfileImage";
import { Box, Stack, Divider, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
//local packages
import NavigationLink from "../NavLink";

function HomePage() {
  return (
    <Box
      sx={(theme) => ({
        minHeight: "100vh",
        backgroundColor: "background.default",
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        color: theme.palette.text.primary,
      })}
    >
      <Box
        component="header"
        sx={(theme) => ({
          backgroundImage: `
            radial-gradient(120% 160% at 100% 0%, rgba(var(--mui-palette-secondary-mainChannel) / 0.1), transparent 55%),
            linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 55%, ${theme.palette.primary.light} 100%)
          `,
          width: "100%",
          padding: theme.spacing(1, 2),
          borderRadius: 2,
          border: `1px solid ${theme.palette.divider}`,
        })}
      >
        <Navbar />
      </Box>

      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          px: { xs: 1, md: 2 },
        }}
      >
        <Box
          component="section"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 2, md: 3 },
          }}
        >
          <Box
            sx={(theme) => ({
              padding: 1,
              backgroundImage: `
                radial-gradient(120% 160% at 100% 0%, rgba(var(--mui-palette-secondary-mainChannel) / 0.1), transparent 55%),
                linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 55%, ${theme.palette.primary.light} 100%)
              `,
              border: `1px solid ${theme.palette.divider}`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              mt: { xs: 0, md: "-60px" },
            })}
          >
            <HomeImage />
          </Box>
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <HomeSummaryNote />
          </Box>
        </Box>

        <Box component="section" sx={{ mt: 2 }}>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={(theme) => ({ padding: theme.spacing(1), flexWrap: "wrap" })}
          >
            <NavigationLink to="/">Projects</NavigationLink>
            <NavigationLink to="/experience">Experience</NavigationLink>
            <NavigationLink to="/about">About</NavigationLink>
            <NavigationLink to="/contact">Contact</NavigationLink>
          </Stack>
          <Divider sx={{ my: 1 }} />
        </Box>

        <Box sx={{ padding: 2 }}>
          <Outlet />
        </Box>
      </Box>

      <Box component="footer" sx={{ textAlign: "center", px: 2 }}>
        <Divider sx={{ mb: 1 }} />
        <Typography variant="body2" color="text.secondary" component="p">
          &copy; Jacques 2026
        </Typography>
      </Box>
    </Box>
  );
}

export default HomePage;
