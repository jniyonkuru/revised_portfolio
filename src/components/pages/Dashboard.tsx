import { Box, Divider, Typography, IconButton } from "@mui/material";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { useNavigate } from "react-router-dom";

//local packages
import NavList from "../dashboard/navigationlist";
import ProjectList from "../dashboard/projectslist";
import PrimaryTitle from "../dashboard/PrimaryTitle";
import ExperiencesList from "../dashboard/ExperiencesList";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

function Dashboard() {
  const navigate = useNavigate();
  const { resetUser } = useContext(UserContext) || {
    user: null,
    resetUser: () => {},
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    resetUser();
    navigate("/");
  };
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(2),
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      })}
    >
      <Box
        component="main"
        sx={(theme) => ({
          display: "flex",
          flex: 1,
          gap: theme.spacing(2),
        })}
      >
        <Box
          component="section"
          sx={(theme) => ({
            width: "200px",
            display: "flex",
            flexDirection: "column",
            padding: theme.spacing(1),
            backgroundColor: theme.palette.background.default,
            borderRadius: theme.shape.borderRadius,
          })}
        >
          <Box sx={() => ({ flex: 1 })}>
            <NavList />
            <Divider
              sx={{
                boxShadow: "0px 0.5px 0px rgba(255, 255, 255, 0.5)",
                my: 2,
              }}
            />
          </Box>
          <Box
            sx={(theme) => ({
              padding: theme.spacing(1),
              display: "flex",
              gap: theme.spacing(1),
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: theme.palette.primary.main,
              borderRadius: theme.shape.borderRadius,
              color: theme.palette.text.primary,
            })}
          >
            <Typography>Log out</Typography>
            <IconButton onClick={handleLogout}>
              <ExitToAppOutlinedIcon fontSize="medium" />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={(theme) => ({
            flex: 1,
            display: "flex",
            gap: theme.spacing(2),
          })}
        >
          <Box
            sx={(theme) => ({
              borderRadius: theme.shape.borderRadius,
              backgroundColor: theme.palette.background.default,
              overflow: "auto",
              maxHeight: "95vh",
              padding: theme.spacing(1, 2),
              flex: 1,
            })}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={(theme) => ({
                fontWeight: theme.typography.fontWeightBold,
                textAlign: "center",
              })}
            >
              <Box sx={{ position: "sticky", top: 0 }}>
                <PrimaryTitle>Projects</PrimaryTitle>
              </Box>
            </Typography>
            <ErrorBoundary>
              <ProjectList />
            </ErrorBoundary>
          </Box>
          <Box
            sx={(theme) => ({
              borderRadius: theme.shape.borderRadius,
              backgroundColor: theme.palette.background.default,
              flex: 1,
              padding: theme.spacing(1, 2),
              maxHeight: "95vh",
              overflow: "auto",
              position: "relative",
            })}
          >
            <Box sx={{ position: "sticky", top: 0 }}>
              <PrimaryTitle>Experiences</PrimaryTitle>
            </Box>
            <ErrorBoundary>
              <ExperiencesList />
            </ErrorBoundary>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
