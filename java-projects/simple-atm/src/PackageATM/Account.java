package PackageATM;

public class Account {
	private String customerName = "Raja";
	private int registrationNumber = 111;
	private int PIN = 456;

    public boolean authenticate(String name, int regNumber, int pin) {
        return customerName.equalsIgnoreCase(name) && registrationNumber == regNumber && PIN == pin;
    
    }
	
}
