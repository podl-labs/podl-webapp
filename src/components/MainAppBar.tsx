import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ReactComponent as Logo } from '../assets/podl-logo-dark.svg'

export default function MainAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <Box paddingY={1} paddingX={1}>
            <Logo fontSize={4} width='100px' height='100%' />
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}