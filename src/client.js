// PURPOSE: To build mock JSON Payload app will receive and convert
const axios = require('axios'); // Common for JSON API calls

// Build the mock JSON payload
const payload = {
    debtorBank: {
        debtorBankName: "First National Bank",
        debtorBankAccount: "123456789",
        debtorRoutingNumber: "987654321",
        debtorName: "John Doe",
        debtorAddress: "123 Main St",
        debtorCountry: "USA",
    },
    beneficiary: {
        beneficiaryBank: "Global Trust",
        beneficiaryBankAccount: "987654321",
        beneficiaryRoutingNumber: "123456789",
        beneficiaryName: "Jane Smith",
        beneficiaryAddress: "456 Oak Ave",
        beneficiaryCountry: "Canada",
    },
    wireType: "SWIFT",
    amount: 1500.75,
    currency: "USD",
    paymentDueDate: "2025-09-10",
};

// Send payload to the API
axios.post('http://localhost:3000/api/convert', payload)
    .then(response => {
        console.log('Transformed payload:', response.data);
    })
    .catch(error => {
        console.error('Error sending payload:', error);
    });