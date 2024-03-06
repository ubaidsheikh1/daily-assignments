class BankAccount {
    constructor(accountNo, accountHolder, balance = 0.0) {
        this._accountNo = accountNo;
        this._accountHolder = accountHolder;
        this._balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this._balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${this._balance}`);
        } else {
            console.log("Invalid withdrawal amount or insufficient funds.");
        }
    }

    displayBalance() {
        console.log(`Account Holder: ${this._accountHolder}`);
        console.log(`Account Number: ${this._accountNo}`);
        console.log(`Current Balance: $${this._balance}`);
    }
}

class SavingAccount extends BankAccount {
    constructor(accountNo, accountHolder, balance = 0.0, interestRate = 0.03, withdrawalLimit = 1000) {
        super(accountNo, accountHolder, balance);
        this._interestRate = interestRate;
        this._withdrawalLimit = withdrawalLimit;
    }

    addInterest() {
        const interestAmount = this._balance * this._interestRate;
        this._balance += interestAmount;
        console.log(`Interest added: $${interestAmount}. New balance: $${this._balance}`);
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            if (amount > this._withdrawalLimit) {
                const penaltyFee = 0.05 * amount;
                amount += penaltyFee;
                console.log(`Withdrew $${amount} with a penalty fee of $${penaltyFee}. New balance: $${this._balance - amount}`);
            } else {
                super.withdraw(amount);
            }
        } else {
            console.log("Invalid withdrawal amount or insufficient funds.");
        }
    }
}


const account1 = new BankAccount("1234567899876543", "Ubaid", 1000.0);
account1.displayBalance();


account1.deposit(500);
account1.withdraw(200);


const savingsAccount1 = new SavingAccount("987654", "ubaid", 2000.0);
savingsAccount1.displayBalance();


savingsAccount1.addInterest();


savingsAccount1.withdraw(1200);
