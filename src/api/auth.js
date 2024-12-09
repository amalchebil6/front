import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

// Register a new user
export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
};

// Log in a user
export const loginUser = async (credentials) => {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
};

// Get the current user's profile (protected route)
export const getProfile = async (token) => {
    const response = await axios.get(`${API_URL}/auth/profile`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};
