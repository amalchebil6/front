import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import Register from './components/register';
import Login from './components/Login';
import CompanyList from './components/companyList';
import CreateCompany from './components/createCompany';
import UpdateCompany from './components/UpdateCompany';

function App() {
    return (
        <Router>
            {/* App Bar (Navigation) */}
            <AppBar position="static" sx={{ marginBottom: 3 }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Company Platform
                    </Typography>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/register">
                        Register
                    </Button>
                    <Button color="inherit" component={Link} to="/login">
                        Login
                    </Button>
                    <Button color="inherit" component={Link} to="/companies">
                        Companies
                    </Button>
                    <Button color="inherit" component={Link} to="/create-company">
                        Create Company
                    </Button>
                </Toolbar>
            </AppBar>

            {/* Main Content */}
            <Container>
                <Box sx={{ padding: 3 }}>
                    <Routes>
                        <Route path="/" element={<Typography variant="h4">Welcome to the Company Platform</Typography>} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/companies" element={<CompanyList />} />
                        <Route path="/create-company" element={<CreateCompany />} />
                        <Route path="/update-company/:id" element={<UpdateCompany />} />
                    </Routes>
                </Box>
            </Container>
        </Router>
    );
}

export default App;
