import React from "react";
import { Box, Typography } from "@mui/material";
import ContactsIcon from "@mui/icons-material/Contacts";
import ContactAddress from "./ContactAddresses";

const ContactsTab: React.FC = () => {
  return (
    <Box>
      <ContactsIcon sx={{ color: "text.primary", fontSize: "30px" }} />
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
        Let us connect
      </Typography>
      <ContactAddress />
    </Box>
  );
};

export default ContactsTab;
