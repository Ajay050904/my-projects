package com.vsics.student.utility;

import java.util.Scanner;
// import com.vsics.student.result.*;
// import static com.vsics.student.result.StudentResult.*;

import com.vsics.student.result.exception.InvalidOptionException;

public class Option {
	public static String  option = null;
	static Scanner scanner = null;
	public static String getOption() {
	
		
		scanner = new Scanner(System.in);
		System.out.println("Please select the options");
		System.out.println("Option -1 :: insert");
		System.out.println("Option -2 :: select");
		System.out.println("Option -3 :: selectall");
		System.out.println("Option -4 :: update");
		System.out.println("Option -5 :: delete");
		System.out.println("Option -6 :: exit");
		option = scanner.next();
		if (option.equalsIgnoreCase("insert")) {
			option="insert";
			//insertStudentResult();
		} else if (option.equalsIgnoreCase("select")) {
			option="select";
			//selectStudentResultByRollNumber();
		} else if (option.equalsIgnoreCase("selectall")) {
			option="selectall";
			//selectStudentResult();
		} else if (option.equalsIgnoreCase("update")) {
			option="update";
			//updateStudentResultByRollNumber();
		} else if (option.equalsIgnoreCase("delete")) {
			option="delete";
			//deleteStudentResultByRollNumber();
		} else if (option.equalsIgnoreCase("exit")) {
			option="exit";
			System.exit(0);
		} else {
			option = "NA";
			if (option.equals("NA")) {
				option="NA";
				throw new InvalidOptionException("please enter valid option");
			 }
		}
		return option;
	}
}

