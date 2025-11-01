package com.bankmanagement.system.Account;

public class Account {
	private int accountNumber;
	private double balance;
	private int pin;

	public Account(int accountNumber, double balance, int pin) {
		this.accountNumber = accountNumber;
		this.balance = balance;
		this.pin = pin;
	}

	public int getAccountNumber() {
		return accountNumber;
	}

	public double getBalance() {
		return balance;
	}

	public void deposit(double amount) {
		if (amount > 0) {
			balance += amount;
			System.out.println("Amount deposited successfully.");
		} else {
			System.out.println("Invalid deposit amount.");
		}
	}

	public void withdraw(double amount) {
		if (amount > 0 && balance >= amount) {
			balance -= amount;
			System.out.println("Amount withdrawn successfully.");
		} else {
			System.out.println("Insufficient balance or invalid amount.");
		}
	}

	public boolean validatePIN(int enteredPIN) {
		return this.pin == enteredPIN;
	}
}
