package com.bankmanagement.system.ATM;

import com.bankmanagement.system.Account.Account;

public class ATM {
	@SuppressWarnings("unused")
	private int atmId;
	@SuppressWarnings("unused")
	private String atmLocation;

	public ATM(int atmId, String atmLocation) {
		this.atmId = atmId;
		this.atmLocation = atmLocation;
	}

	public void checkBalance(Account account) {
		System.out.println("Current balance: ₹" + account.getBalance());
	}

	public void deposit(Account account, double amount) {
		account.deposit(amount);
	}

	public void withdraw(Account account, double amount) {
		account.withdraw(amount);
	}

	public boolean validatePIN(Account account, int enteredPIN) {
		return account.validatePIN(enteredPIN);
	}
}
