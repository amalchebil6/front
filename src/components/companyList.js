import React, { useEffect, useState } from 'react';
import { getUserCompanies, deleteCompany } from '../api/company';

const CompanyList = () => {
    const [companies, setCompanies] = useState([]);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const data = await getUserCompanies();
                setCompanies(data);
            } catch (err) {
                setError('Failed to fetch companies');
            }
        };
        fetchCompanies();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteCompany(id);
            setCompanies(companies.filter((company) => company.registrationNumber !== id));
            setMessage('Company deleted successfully');
        } catch (err) {
            setMessage('Failed to delete company');
        }
    };

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>My Companies</h1>
            {message && <p>{message}</p>}
            <ul>
                {companies.map((company) => (
                    <li key={company.registrationNumber}>
                        <strong>{company.name}</strong> - {company.status}
                        <button onClick={() => handleDelete(company.registrationNumber)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CompanyList;
