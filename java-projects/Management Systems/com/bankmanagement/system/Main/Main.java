package com.bankmanagement.system.Main;

import java.util.Scanner;

import com.bankmanagement.system.ATM.ATM;
import com.bankmanagement.system.Account.Account;
import com.bankmanagement.system.Bank.Bank;
import com.bankmanagement.system.Customer.Customer;

public class Main {
	public static void main(String[] args) {
		Bank bank = new Bank(5);

		Account acc1 = new Account(1001, 5000.0, 1234);
		Customer cust1 = new Customer("Ajay", acc1);
		bank.addCustomer(cust1);

		Account acc2 = new Account(1002, 3000.0, 5678);
		Customer cust2 = new Customer("Priya", acc2);
		bank.addCustomer(cust2);

		ATM atm = new ATM(1, "Kanpur");

		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter your account number: ");
		int accNum = scanner.nextInt();
		Customer customer = bank.getCustomer(accNum);

		if (customer != null) {
			System.out.print("Enter your PIN: ");
			int pin = scanner.nextInt();

			if (atm.validatePIN(customer.getAccount(), pin)) {
				System.out.println("1. Check Balance\n2. Deposit\n3. Withdraw");
				System.out.print("Choose an option: ");
				int option = scanner.nextInt();

				switch (option) {
				case 1:
					atm.checkBalance(customer.getAccount());
					break;
				case 2:
					System.out.print("Enter amount to deposit: ");
					double depositAmt = scanner.nextDouble();
					atm.deposit(customer.getAccount(), depositAmt);
					break;
				case 3:
					System.out.print("Enter amount to withdraw: ");
					double withdrawAmt = scanner.nextDouble();
					atm.withdraw(customer.getAccount(), withdrawAmt);
					break;
				default:
					System.out.println("Invalid option.");
				}
			} else {
				System.out.println("Invalid PIN.");
			}
		} else {
			System.out.println("Account not found.");
		}

		scanner.close();
	}
}
