import React, { useState } from 'react';
import { loginUser } from '../api/auth';
import {
    TextField,
    Button,
    Typography,
    Alert,
    Container,
    Box,
    Paper,
} from '@mui/material';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await loginUser(formData);
            localStorage.setItem('token', data.token); // Save token to localStorage
            setMessage('Login successful!');
            setIsSuccess(true);
        } catch (error) {
            setMessage('Login failed. Please check your credentials.');
            setIsSuccess(false);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ marginTop: 4 }}>
            <Paper elevation={3} sx={{ padding: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Login to Your Account
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Login
                        </Button>
                        {message && (
                            <Alert severity={isSuccess ? 'success' : 'error'}>{message}</Alert>
                        )}
                    </Box>
                </form>
            </Paper>
        </Container>
    );
};

export default Login;
