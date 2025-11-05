package PackageATM;

import java.util.Scanner;

public class ATM {

	public static void main(String[] args) {

		 Scanner sc = new Scanner(System.in);

	        System.out.println("        -><- Welcome To Our ATM -><-        ");
	        System.out.println("      ********************************  ");
	        System.out.println("-><- To Use Our Services Please Login To Your Account :");
	        System.out.println("*********************************************************   ");
	        
	        Customer c1 = new Customer();

	        System.out.println("Enter Your Name: ");
	        String name = sc.nextLine();
	        System.out.println("Enter Your Registration Number: ");
	        int regNumber = sc.nextInt();
	        System.out.println("Enter Your PIN: ");
	        int pin = sc.nextInt();

	        if (c1.authenticate(name, regNumber, pin)) {
	            System.out.println("Congrats, You Have Successfully Logged In: ");

	            System.out.println("Please Enter Your choice : ");
	            System.out.println("1- Balance Inquiry ");
	            System.out.println("2- Transfer Balance ");
	            System.out.println("3- Credit Balance ");
	            System.out.println("4- Exit ");
	            int choice = sc.nextInt();

	            switch (choice) {
	                case 1:
	                    double balance = c1.viewBalance();
	                    System.out.println("Your Current Balance is: " + balance);
	                    break;
	                case 2:
	                    System.out.println("Enter the amount to transfer: ");
	                    double amount = sc.nextDouble();
	                    c1.transferBalance(amount);
	                    break;
	                case 3:
	                    System.out.println("Enter the amount to credit: ");
	                    double creditAmount = sc.nextDouble();
	                    c1.depositBalance(creditAmount);
	                    break;
	                case 4:
	                    System.out.println("Thank you for using our ATM. Have a nice day!");
	                    break;
	                default:
	                    System.out.println("Invalid choice! Please enter a valid option.");
	                    break;
	            }
	        } else {
	            System.out.println("Please Input Correct Information.");
	        }
	        
	        sc.close();

	}
}
