import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'
import './index.css'
import App from './App.tsx'
import {BrowserRouter}  from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeProvider>
    </CssBaseline>
  </StrictMode>,
)
