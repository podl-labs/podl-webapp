import { Box, Button, Container, Typography } from '@mui/material'
import './App.css'
import { GitHub, Twitter } from '@mui/icons-material'

function App() {
  return (
    <Container maxWidth="lg">
      <Box marginY={10} textAlign="center">
        <Typography variant="h2">Open source and scalable MLOps</Typography>
        <Typography variant="h5" marginTop={5}>Podl is an open source Modal.com alternative. A game changing library to declare infrastructure and scale servers in Python. Run code in seconds without thinking about the cloud.</Typography>

        <Box marginTop={3} display='flex' justifyContent='center' gap={2}>
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
            href="https://github.com/podl"
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
  )
}

export default App
