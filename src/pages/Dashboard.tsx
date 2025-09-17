import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import UserDetails from "../components/UserDetails";
import BigButton from "../components/BigButton";
import AddIcon from "@mui/icons-material/Add";

function Dashboard() {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        height: "100vh",
        background: "linear-gradient(90deg,#e2e5e6,#fce8b5)",
      }}
    >
      <Box component="header" sx={{ position: "sticky", boxShadow: 8 }}>
        <Navbar />
      </Box>
      <Box
        component="main"
        sx={{ display: "flex", width: "100%", justifyContent: "space-between" ,padding:2 }}
      >
        <Box component="section" id="section1" sx={{ width:"40%"}}>
          <UserDetails  />
        </Box>
        <Box
          component="section"
          id="section2"
          sx={{ display: "flex", flexDirection: { md: "column" } ,flex:1}}
        >
          <BigButton
            Icon={AddIcon}
            clickHandler={() => console.log("clicked")}
            text="Add new Project"
            backgroundColor="#FF9B2F"
          />
          <BigButton
            Icon={AddIcon}
            clickHandler={() => console.log("clicked")}
            text="Add new Project"
            backgroundColor="#5BBCFF"
          />
          <BigButton
            Icon={AddIcon}
            clickHandler={() => console.log("clicked")}
            text="Add Experience"
            backgroundColor="#8AA624"
          />
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
