package com.data.student;

import java.util.Scanner;
public class MainApp {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter Studnet name :: ");
		String name = sc.next();
		System.out.println("Enter Studnet roll number :: ");
		int rno = sc.nextInt();
		Student s1=new Student();
		s1.setsName(name);
		s1.setsRno(rno);
		Database d=new Database();
		d.displayStundetData(s1);
		sc.close();
	}

}
