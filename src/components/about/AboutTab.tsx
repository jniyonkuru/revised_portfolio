import React from "react";
//third party packages
import { Box, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const AboutTab: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <PersonIcon sx={{ color: "text.primary", fontSize: "30px" }} />
        <Typography
          component="span"
          variant="h5"
          sx={{
            color: "text.primary",
            textAlign: "center",
            ml: 2,
            fontWeight: "bold",
          }}
        >
          About me
        </Typography>
      </Box>
      <Typography component="p" sx={{ color: "text.primary", m: 2 }}>
        I’m Jacques Niyonkuru, an aspiring software engineer passionate about
        building scalable and user-friendly web applications. With a strong
        foundation in JavaScript, React, Node.js, PostgreSQL, MongoDB, and
        GraphQL, I specialize in full-stack development and enjoy solving
        complex problems with technology. Previously, I worked in healthcare,
        which fueled my passion for crafting technology-driven solutions that
        positively impact lives. This experience drives my commitment to
        building meaningful and impactful software.
      </Typography>
    </Box>
  );
};

export default AboutTab;
