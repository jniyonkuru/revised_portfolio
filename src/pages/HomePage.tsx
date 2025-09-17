import React from "react";
import Navbar from "../components/Navbar";
import HomeSummaryNote from "../components/HomeSummaryNote";
import HomeImage from "../components/ProfileImage";
import HomePageSkillsCardsCollection from "../components/HomePageskillsCardsCollection";
import HomePageFooter from "../components/HomePageFooter";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Box, Typography, Divider, Tab, Tabs } from "@mui/material";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import ExperienceTimeline from "../components/ExperienceTimeline";
import PersonIcon from "@mui/icons-material/Person";
import CustomTabPanel from "../components/CustomTabPanel";

function HomePage() {
  const [value, setValue] = React.useState(0);
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
      event.preventDefault()
    
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor:"background.default"
      }}
    >
      <Box
        component="header"
        sx={{
          background:
            "linear-gradient(90deg, #ffffff 0%, #fce8b5 20%, #e2e5e6 100%)",
          width: "100%",
          height:'100px'
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
              padding: 2,
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
              width: "fit-content",
              borderRadius: 32,
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
            <Tabs value={value} onChange={handleTabChange}>
              <Tab label="Work" />
              <Tab label="Experience" />
              <Tab label="About" />
              <Tab label="Contact" />
            </Tabs>
          </Box>
          <Divider
            sx={{ boxShadow: "0px 0.5px 0px rgba(255, 255, 255, 0.5)", my: 1 }}
          />
        </Box>

        <CustomTabPanel index={0} value={value}>
          <Box>
            <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <FolderOpenIcon
                  sx={{ color: "primary.contrastText", fontSize: "30px" }}
                />
                <Typography
                  component="span"
                  variant="h5"
                  sx={{
                    color: "primary.contrastText",
                    textAlign: "center",
                    ml: 2,
                    fontWeight: "bold",
                  }}
                >
                  Projects
                </Typography>
              </Box>
            </Box>
            <HomePageSkillsCardsCollection />
          </Box>
        </CustomTabPanel>

        <CustomTabPanel index={1} value={value}>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <BusinessCenterIcon
                sx={{ color: "primary.contrastText", fontSize: "30px" }}
              />
              <Typography
                component="span"
                variant="h5"
                sx={{
                  color: "primary.contrastText",
                  textAlign: "center",
                  ml: 2,
                  fontWeight: "bold",
                }}
              >
                Experience
              </Typography>
            </Box>
            <Box>
              <ExperienceTimeline />
            </Box>
          </Box>
        </CustomTabPanel>
        <CustomTabPanel index={2} value={value}>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PersonIcon
                sx={{ color: "primary.contrastText", fontSize: "30px" }}
              />
              <Typography
                component="span"
                variant="h5"
                sx={{
                  color: "primary.contrastText",
                  textAlign: "center",
                  ml: 2,
                  fontWeight: "bold",
                }}
              >
                About me
              </Typography>
            </Box>
            <Typography
              component="p"
              sx={{ color: "primary.contrastText", m: 2 }}
            >
              I’m Jacques Niyonkuru, an aspiring software engineer passionate
              about building scalable and user-friendly web applications. With a
              strong foundation in JavaScript, React, Node.js, PostgreSQL,
              MongoDB, and GraphQL, I specialize in full-stack development and
              enjoy solving complex problems with technology. Previously, I
              worked in healthcare, which fueled my passion for crafting
              technology-driven solutions that positively impact lives. This
              experience drives my commitment to building meaningful and
              impactful software.
            </Typography>
          </Box>
        </CustomTabPanel>
        <CustomTabPanel index={3} value={value}>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <HomePageFooter />
          </Box>
        </CustomTabPanel>
      </Box>
    </Box>
  );
}

export default HomePage;
