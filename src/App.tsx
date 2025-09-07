import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import { Routes,Route } from "react-router-dom";

function App() {
    return (

        <Routes>
            <Route element={ <HomePage/>} path="/"/>
            <Route element={<Dashboard/>} path='/dashboard'/>
        </Routes>
       
)
}

export default App
