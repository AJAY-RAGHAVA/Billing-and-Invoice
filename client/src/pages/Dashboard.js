import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [usageDetails, setUsageDetails] = useState({});
    const [billingInfo, setBillingInfo] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
            const usageRes = await axios.get('http://localhost:5000/usage', { withCredentials: true });
            setUsageDetails(usageRes.data.data);

            const billingRes = await axios.get('http://localhost:5000/billing', { withCredentials: true });
            setBillingInfo(billingRes.data.data);
        };
        fetchData();
    }, []);
    
    const generateInvoice = async () => {
        await axios.post('http://localhost:5000/invoice', {}, { withCredentials: true });
        alert('Invoice generated');
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                <h2>Usage Details</h2>
                <pre>{JSON.stringify(usageDetails, null, 2)}</pre>
            </div>
            <div>
                <h2>Billing Info</h2>
                <pre>{JSON.stringify(billingInfo, null, 2)}</pre>
            </div>
            <button onClick={generateInvoice}>Generate Invoice</button>
        </div>
    );
};

export default Dashboard;
