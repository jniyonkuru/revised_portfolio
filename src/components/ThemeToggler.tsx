import { Moon, Sun } from "lucide-react";
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
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </IconButton>
  );
}

export default ThemeToggler;
