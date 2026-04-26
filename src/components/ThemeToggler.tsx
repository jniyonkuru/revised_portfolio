import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton } from "@mui/material";
import { useThemeContext } from "../themeContext";

function ThemeToggler() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <IconButton
      sx={(theme) => ({
        color: theme.palette.text.primary,
        transition: theme.transitions.create(["background", "transform"], {
          duration: theme.transitions.duration.standard,
          delay: 0,
          easing: "linear",
        }),
        "&:hover": {
          background: theme.palette.background + "20",
          transform: "scale(1.01)",
        },
      })}
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <DarkModeOutlinedIcon fontSize="small" />
      ) : (
        <LightModeIcon fontSize="small" />
      )}
    </IconButton>
  );
}

export default ThemeToggler;
