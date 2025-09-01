// For transforming API payloads

// Transform the payload obtained
function transformPayload(inputData) {
    return {
        from: {
            bank: inputData.debtorBank.debtorBankName,
            account: inputData.debtorBank.debtorBankAccount,
            routing: inputData.debtorBank.debtorRoutingNumber,
            name: inputData.debtorBank.debtorName,
            address: inputData.debtorBank.debtorAddress,
            country: inputData.debtorBank.debtorCountry,
        },
        to: {
            bank: inputData.beneficiary.beneficiaryBank,
            account: inputData.beneficiary.beneficiaryBankAccount,
            routing: inputData.beneficiary.beneficiaryRoutingNumber,
            name: inputData.beneficiary.beneficiaryName,
            address: inputData.beneficiary.beneficiaryAddress,
            country: inputData.beneficiary.beneficiaryCountry,
        },
        transaction: {
            type: inputData.wireType,
            amount: inputData.amount,
            currency: inputData.currency,
            dueDate: inputData.paymentDueDate,
        },
    };
}

module.exports = {
    transformPayload
};