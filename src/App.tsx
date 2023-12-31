import { Box, Button, Container, Typography } from '@mui/material'
import './App.css'
import { GitHub, Twitter } from '@mui/icons-material'
import backgroundImage from './assets/animated-shapes-background.svg'

function App() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        length: 'auto'
      }}
    >
    <Container maxWidth="lg">
      <Box textAlign="center">
        <Typography variant="h1" paddingTop={8}>Open and scalable MLOps</Typography>
        <Typography variant="h5" paddingTop={5}>Declare infra and scale servers with Python. Run code in seconds without thinking about the cloud. Open source and Kubernetes native.</Typography>

        <Box paddingTop={5} paddingBottom={4} display='flex' justifyContent='center' gap={2}>
          <Button
            href="https://twitter.com/podl_ai"
            target="_blank"
            rel="noopener noreferrer"
            variant='contained'
            startIcon={<Twitter/>}
          >
            Twitter
          </Button>
          <Button
            href="https://github.com/podl-labs"
            target="_blank"
            rel="noopener noreferrer"
            variant='outlined'
            startIcon={<GitHub/>}
          >
            Github
          </Button>
        </Box>

      </Box>

    </Container>

    </Box>
  )
}

export default App
