import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton } from "@mui/material";
import { useThemeContext } from "../themeContext";

function ThemeToggler() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <IconButton
      sx={{
        boxShadow: 1,
        background: "white",
        "&:hover": { background: "#EEEEEE" },
      }}
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <DarkModeIcon fontSize="small" color="secondary" />
      ) : (
        <LightModeIcon fontSize="small" sx={{ color: "background.default" }} />
      )}
    </IconButton>
  );
}

export default ThemeToggler;
