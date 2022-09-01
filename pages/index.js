import { CssBaseline, Paper } from '@mui/material'
import { Box, Container } from '@mui/system'
import Form from '../Components/Form'
import Navbar from '../Components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <Container maxWidth={false} component={Box} p={5} >
        <Paper component={Box} p={5} elevation={3} >
          <Form />
        </Paper>
      </Container>
    </>
  )
}
