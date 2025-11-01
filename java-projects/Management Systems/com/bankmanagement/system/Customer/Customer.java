package com.bankmanagement.system.Customer;

import com.bankmanagement.system.Account.Account;

public class Customer {
	private String name;
	private Account account;

	public Customer(String name, Account account) {
		this.name = name;
		this.account = account;
	}

	public String getName() {
		return name;
	}

	public Account getAccount() {
		return account;
	}
}
