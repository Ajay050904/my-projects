import java.util.Scanner;

public class AgeCalculator {
    int pd, pm, py, bd, bm, by;

    public void ageCalc() {
        if (pm >= bm && pd >= bd) {
            int year, month, day;
            year = py - by;
            month = pm - bm;
            day = pd - bd;
            System.out.println("years= " + year);
            System.out.println("months= " + month);
            System.out.println("days= " + day);
        } else if (pm < bm && pd > bd) {
            int year, month, day;
            py = py - 1;
            pm = pm + 12;
            year = py - by;
            month = pm - bm;
            day = pd - bd;
            System.out.println("years= " + year);
            System.out.println("months= " + month);
            System.out.println("days= " + day);

        } else if (pm < bm && pd < bd) {
            int year, month, day;
            py = py - 1;
            pm = pm + 11;
            if (pm / 2 == 1 || pm / 2 == 3 || pm / 2 == 5 || pm / 2 == 7 || pm / 2 == 8 || pm / 2 == 8 || pm / 2 == 10
                    || pm / 2 == 12) {
                pd = pd + 31;
            } else if (pm / 2 == 4 || pm / 2 == 6 || pm / 2 == 9 || pm / 2 == 11) {
                pd = pd + 30;
            } else if (pm / 2 == 2) {
                pd = pd + 28;
            }
            year = py - by;
            month = pm - bm;
            day = pd - bd;
            System.out.println("years= " + year);
            System.out.println("months= " + month);
            System.out.println("days= " + day);
        } else
            System.out.println("your DOB is invalid");
    }

    public static void main(String[] args) {
        AgeCalculator ac = new AgeCalculator();
        Scanner sc = new Scanner(System.in);
        while (true) {
            System.out.print("enter your DOB= ");
            ac.bd = sc.nextInt();
            ac.bm = sc.nextInt();
            ac.by = sc.nextInt();
            System.out.print("enter your DOP= ");
            ac.pd = sc.nextInt();
            ac.pm = sc.nextInt();
            ac.py = sc.nextInt();
            ac.ageCalc();
        }
    }
}