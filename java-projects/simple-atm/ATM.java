class Account
{
    private double balance;
    public void setBalance(double balance)
    {
        this.balance = balance;        
    }
    public double getBalance()
    {
        return balance;
    }
}
class ATM
{
    public static void main(String[] args) {
        Account a1 = new Account();
        a1.setBalance(1000);
        System.out.println(a1.getBalance());
    }
}