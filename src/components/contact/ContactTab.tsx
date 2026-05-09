import React from "react";
import { Box } from "@mui/material";
import { Contact } from "lucide-react";
import ContactAddress from "./ContactAddresses";
import SectionHeader from "../SectionHeader";

const ContactsTab: React.FC = () => {
  return (
    <Box>
      <SectionHeader icon={Contact} title="Let us connect" />
      <ContactAddress />
    </Box>
  );
};

export default ContactsTab;
