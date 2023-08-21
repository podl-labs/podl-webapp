import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.tsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import MainAppBar from './components/MainAppBar.tsx';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainAppBar />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
