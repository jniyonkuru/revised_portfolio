import { Box, Paper, Typography } from "@mui/material";
import ProfileImage from "./ProfileImage";


function UserDetails() {
  return (
    <Box
      component={Paper}
      elevation={30}
      boxShadow={20}
      borderRadius={3}
      sx={{
        width:"100%",
        minHeight: "300px",
        height: "100%",
        background: "rgba(255,255,255,0.2)",
        backdropFilter: "blur(50px)",
        border: "1px solid rgba(255,255,255,0.5)",
      }}
    >
      <ProfileImage width={100} height={100} />
      <Typography variant="subtitle2">
        Email:niyonkurujacques@gmail.com
      </Typography>
      <Typography variant="subtitle2">LinkedIn:linkedInProfile</Typography>
      <Typography variant="subtitle2">Github:githubProfile</Typography>
    </Box>
  );
}

export default UserDetails;
