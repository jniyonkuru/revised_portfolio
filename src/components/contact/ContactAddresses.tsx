import { Box, Typography, Stack } from "@mui/material";
import CustomButton from "../CustomButton";
import { Link, Mail, FileText } from "lucide-react";

function ContactAddress() {
  return (
    <Box>
      <Typography sx={{ my: 2, color: "text.primary" }}>
        Let's connect and bring your projects to life.
      </Typography>

      <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: "wrap" }}>
        <CustomButton
          text="LinkedIn"
          href="https://www.linkedin.com/in/jacques-niyonkuru-55b12b180/"
          external
          icon={<Link size={18} />}
        />
        <CustomButton
          href="mailto:niyonkurujacques@gmail.com"
          text="Email"
          icon={<Mail size={18} />}
        />
        <CustomButton
          href="/Jacques_Resume.pdf"
          other={{ download: "Resume.pdf" }}
          text="Resume"
          icon={<FileText size={18} />}
        />
      </Stack>
    </Box>
  );
}

export default ContactAddress;
