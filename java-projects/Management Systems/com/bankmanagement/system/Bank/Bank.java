package com.bankmanagement.system.Bank;

import com.bankmanagement.system.Customer.Customer;

public class Bank {
	private Customer[] customers;
	private int numOfCustomers;

	public Bank(int size) {
		customers = new Customer[size];
		numOfCustomers = 0;
	}

	public void addCustomer(Customer customer) {
		if (numOfCustomers < customers.length) {
			customers[numOfCustomers] = customer;
			numOfCustomers++;
		} else {
			System.out.println("Bank is full. Cannot add more customers.");
		}
	}

	public Customer getCustomer(int accountNumber) {
		for (int i = 0; i < numOfCustomers; i++) {
			if (customers[i].getAccount().getAccountNumber() == accountNumber) {
				return customers[i];
			}
		}
		return null;
	}
}
