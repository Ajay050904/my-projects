import java.util.Scanner;

class Account
{
    private int registrationNumber = 111;
    private String CustomerName = "Raja";
    private int PIN = 000;
    public void  InputDetails()
    {
        int a,c;
        String b;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Resgistration Number: ");
        a = sc.nextInt();
        System.out.println("Enter Your Name: ");
        sc.nextLine();
        b = sc.nextLine();
        System.out.println("Enter Your Pin: ");
        c = sc.nextInt();
        if(registrationNumber == a && CustomerName.equals(b) && PIN == c )
        {
            System.out.println("You Have Been Logged In: ");
        }
        else 
        {
            System.out.println("Please Input Correct Information: ");
        }
        sc.close();
    }
}

class Customer extends Account
{
    private double balance = 50000;
    public double viewBalance()
    {
        return balance;
    }
    public void TransferBalance(double x)
    {
        if(x <= balance ){
        balance = balance - x;
        System.out.println("After Transfering Your Avaliavle Balance is:" + balance);
        }
        else{ 
        System.out.println("Insufficient Amount: ");
        }   
    }
}

class ATM2
{
    public static void main(String[] args) {
        Customer c1 = new Customer();
        System.out.println(" -><- Welcome To Our ATM -><- ");
        System.out.println("For Verifying Please Input Your Details: ");
        c1.InputDetails();
        System.out.println("Your Current Balance Is: " + c1.viewBalance());
        c1.TransferBalance(10000.0);
    }
}
