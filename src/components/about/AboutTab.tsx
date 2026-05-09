import React from "react";
//third party packages
import { Box, Typography } from "@mui/material";
import { User } from "lucide-react";

//local packages
import SectionHeader from "../SectionHeader";

const AboutTab: React.FC = () => {
  return (
    <Box>
      <SectionHeader icon={User} title="About me" />
      <Typography
        component="p"
        sx={{ color: "text.secondary", m: 2, maxWidth: "65ch", lineHeight: 1.7 }}
      >
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
