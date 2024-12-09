import React, { useState } from 'react';
import { updateCompany } from '../api/company';

const UpdateCompany = ({ companyId }) => {
    const [formData, setFormData] = useState({ name: '', registrationNumber: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateCompany(companyId, formData);
            setMessage('Company updated successfully!');
        } catch (err) {
            setMessage('Failed to update company');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Update Company</h2>
            <input
                name="name"
                placeholder="Company Name"
                value={formData.name}
                onChange={handleChange}
            />
            <button type="submit">Update</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default UpdateCompany;
