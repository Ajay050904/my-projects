package PackageATM;

public class Customer extends Account {
	private double balance = 50000;

	public double viewBalance() {
		return balance;
	}

	public void transferBalance(double amount) {
		if (amount <= balance) {
			balance = balance - amount;
			 System.out.println("After Transferring Rs." + amount + ", Your Available Balance is: Rs." + balance);
		} else {
			System.out.println("Insufficient Balance: ");
		}
	}

	public void depositBalance(double depositAmount) {
		balance = balance + depositAmount;
		  System.out.println("After Depositing Amount Of Rs." + depositAmount +
	                ", Now Your Available Balance is: Rs." + balance);
	}

}
