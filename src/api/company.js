import axios from 'axios';

const API_URL = "http://localhost:5000/api/companies";

// Helper to get authorization headers
const getAuthHeader = () => {
    const token = localStorage.getItem('token');
    return { Authorization: `Bearer ${token}` };
};

// Create a company
export const createCompany = async (data) => {
    const response = await axios.post(`${API_URL}/`, data, {
        headers: getAuthHeader(),
    });
    return response.data;
};

// Get the list of companies for the user
export const getUserCompanies = async () => {
    const response = await axios.get(`${API_URL}/list`, {
        headers: getAuthHeader(),
    });
    return response.data;
};

// Update a company (except status)
export const updateCompany = async (id, data) => {
    const response = await axios.put(`${API_URL}/update/${id}`, data, {
        headers: getAuthHeader(),
    });
    return response.data;
};

// Delete a company
export const deleteCompany = async (id) => {
    const response = await axios.get(`${API_URL}/${id}/delete`, {
        headers: getAuthHeader(),
    });
    return response.data;
};
