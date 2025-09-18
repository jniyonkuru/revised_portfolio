import * as React from "react";

type ThemeType = "dark" | "light";
interface ThemeContextProps {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextProps | undefined>(
  undefined
);

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = React.useState<ThemeType>("light");
  const toggleTheme = () => {
    return setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export  const useThemeContext=()=>{
    const context=React.useContext(ThemeContext);

    if(!context){
        throw new Error("useThemeContext must be used within ThemeProvider");
    }
 return context
}
