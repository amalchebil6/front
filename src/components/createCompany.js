import React, { useState } from 'react';
import { createCompany } from '../api/company';
import {
    TextField,
    Button,
    Typography,
    Alert,
    Container,
    Box,
    Paper,
} from '@mui/material';

const CreateCompany = () => {
    const [formData, setFormData] = useState({ name: '', registrationNumber: '' });
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createCompany(formData);
            setMessage('Company created successfully!');
            setIsSuccess(true);
            setFormData({ name: '', registrationNumber: '' });
        } catch (err) {
            setMessage('Failed to create company');
            setIsSuccess(false);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ marginTop: 4 }}>
            <Paper elevation={3} sx={{ padding: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Create a Company
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField
                            label="Company Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                        <TextField
                            label="Registration Number"
                            name="registrationNumber"
                            value={formData.registrationNumber}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Create Company
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

export default CreateCompany;
