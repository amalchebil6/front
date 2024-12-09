import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

// Register a new user
export const registerUser = async (userData) => {
    console.log(API_URL)
    const response = await axios.post("http://localhost:5000/api/auth/register", userData);
    return response.data;
};

// Log in a user
export const loginUser = async (credentials) => {
    console.log(API_URL)
    const response = await axios.post("http://localhost:5000/api/auth/login", credentials);
    return response.data;
};

// Get the current user's profile (protected route)
export const getProfile = async (token) => {
    const response = await axios.get("http://localhost:5000/api/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};
