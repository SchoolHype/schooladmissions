import React from 'react'
import Navbar from '../Components/Navbar'
import Form from '../Components/Form'
import { Box, Container, Paper } from '@mui/material'
const RegisterForm = () => {
    return (
        <div>
            <Navbar />
            <Container maxWidth={false} component={Box} p={5} >
                <Paper component={Box} p={5} elevation={3} >
                    <Form />
                </Paper>
            </Container>
        </div>
    )
}

export default RegisterForm