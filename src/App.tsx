import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import { Routes,Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import generateTheme from "../theme";
import { useThemeContext } from "./themeContext";
function App() {
    const{theme}=useThemeContext()
    return (
    <ThemeProvider theme={generateTheme(theme==='dark')}>
        <Routes>
            <Route element={ <HomePage/>} path="/"/>
            <Route element={<Dashboard/>} path='/dashboard'/>
        </Routes>
        
        </ThemeProvider>
       
)
}

export default App
