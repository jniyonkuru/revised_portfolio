import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";

import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./themeContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    
  }
})

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <CssBaseline>
          <BrowserRouter>
            <ThemeContextProvider>
              <App />
            </ThemeContextProvider>
          </BrowserRouter>
      </CssBaseline>
    </StrictMode>
  </QueryClientProvider>
);
