import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";

import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./themeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline>
      
        <BrowserRouter>
          <ThemeContextProvider>
            <App />
          </ThemeContextProvider>
        </BrowserRouter>
    </CssBaseline>
  </StrictMode>
);
