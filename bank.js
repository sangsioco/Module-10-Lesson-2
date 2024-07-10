// Define the bank account object with initial balance
const bankAccount = {
    balance: 0,

    // Task 1: Function to handle deposits
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    },

    // Task 2: Function to handle withdrawals
    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
            } else {
                console.log("Insufficient balance.");
            }
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    },

    // Task 3: Function to check the current balance
    checkBalance() {
        console.log(`Current balance: $${this.balance}`);
    }
};

// Example Usage
bankAccount.deposit(500); // Output: Deposited $500. New balance: $500
bankAccount.withdraw(200); // Output: Withdrew $200. New balance: $300
bankAccount.checkBalance(); // Output: Current balance: $300
bankAccount.withdraw(400); // Output: Insufficient balance.
