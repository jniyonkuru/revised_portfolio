//third party packages

import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import generateTheme from "../theme";
import { useThemeContext } from "./themeContext";
import UserProvider from "./UserContext";
import { Suspense } from "react";

// local packages

import ExperienceTab from "./components/experiences/ExperienceTab";
import ProjectsTab from "./components/projects/ProjectsTab";
import AboutTab from "./components/about/AboutTab";
import ContactTab from "./components/contact/ContactTab";
import HomePage from "./components/pages/HomePage";
import Dashboard from "./components/pages/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={generateTheme(theme === "dark")}>
      <UserProvider>
        <Routes>
          <Route element={<HomePage />} path="/">
            <Route index element={<ProjectsTab />}/>
            <Route
              path="/experience"
              element={
                <Suspense fallback={<h1>loading ....</h1>}>
                  <ExperienceTab />
                </Suspense>
              }
            ></Route>
            <Route path="/about" element={<AboutTab />}/>
            <Route path="/contact" element={<ContactTab />}/>
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route element={<Dashboard />} path="/dashboard"/>
          </Route>
        </Routes>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
