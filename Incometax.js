function calculateTax() {
    var income = parseInt(document.getElementById("income").value);
    var age = parseInt(document.getElementById("age").value);
    var accountBalance = parseInt(document.getElementById("accountBalance").value);
    var tax = 0;

    // Age-based tax benefits
    if (age < 60) {
        // Apply tax rules for individuals below 60 years
        if (income <= 250000) {
            tax = 0;
        } else if (income <= 500000) {
            tax = (income - 250000) * 0.05;
        } else if (income <= 1000000) {
            tax = 12500 + (income - 500000) * 0.2;
        } else {
            tax = 112500 + (income - 1000000) * 0.3;
        }
    } else {
        // Apply tax rules for individuals above 60 years (senior citizens)
        // Modify tax rules for senior citizens as per Indian tax laws
        if (income <= 300000) {
            tax = 0;
        } else if (income <= 500000) {
            tax = (income - 300000) * 0.05;
        } else if (income <= 1000000) {
            tax = 10000 + (income - 500000) * 0.2;
        } else {
            tax = 110000 + (income - 1000000) * 0.3;
        }
    }

    // Consider account balance for tax calculation
    // For simplicity, let's assume a tax deduction for a certain account balance threshold
    if (accountBalance >= 1000000) {
        tax -= 5000; // Deduct ₹5000 from tax if account balance is above ₹1,000,000
    }

    document.getElementById("taxAmount").innerText = "₹" + tax.toFixed(2);
}
