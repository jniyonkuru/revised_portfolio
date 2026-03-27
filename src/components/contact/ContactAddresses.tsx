import { Box, Typography } from "@mui/material";
import CustomButton from "../CustomButton";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DescriptionIcon from "@mui/icons-material/Description";

function ContactAddress() {
  return (
    <Box sx={{ color: "black" }}>
      <Typography sx={{ my: 2, color: "text.primary" }}>
        Let's connect and bring your projects to life.
      </Typography>

      <Box>
        <CustomButton
          text="LinkedIn"
          href="https://www.linkedin.com/in/jacques-niyonkuru-55b12b180/"
          Icon={MailOutlineIcon}
        />
        <CustomButton
          href="mailto:niyonkurujacques@gmail.com"
          text="Email"
          Icon={MailOutlineIcon}
        />
        <CustomButton
          href="/Jacques_Resume.pdf"
          other={{ download: "Resume.pdf" }}
          text="Resume"
          Icon={DescriptionIcon}
        />
      </Box>
    </Box>
  );
}

export default ContactAddress;
