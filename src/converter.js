// For transforming API payloads

// Transform the payload obtained
function transformPayload(inputData) {
    return {
        sender: {
            bankName: inputData.debtorBank.debtorBankName,
            accountNumber: inputData.debtorBank.debtorBankAccount,
            routingNumber: inputData.debtorBank.debtorRoutingNumber,
            accountHolderName: inputData.debtorBank.debtorName,
            address: inputData.debtorBank.debtorAddress,
            country: inputData.debtorBank.debtorCountry,
        },
        recipient: {
            bankName: inputData.beneficiary.beneficiaryBank,
            accountNumber: inputData.beneficiary.beneficiaryBankAccount,
            routingNumber: inputData.beneficiary.beneficiaryRoutingNumber,
            accountHolderName: inputData.beneficiary.beneficiaryName,
            address: inputData.beneficiary.beneficiaryAddress,
            country: inputData.beneficiary.beneficiaryCountry,
        },
        wireTransfer: {
            transferType: inputData.wireType,
            transferAmount: inputData.amount,
            currency: inputData.currency,
            scheduledDate: inputData.paymentDueDate,
        },
    };
}

module.exports = {
    transformPayload
};