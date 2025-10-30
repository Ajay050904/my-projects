package com.vsics.student.dao;

import static com.vsics.student.dao.OurConnection.con;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class InsertStudentResult {
	public static void insertStudentResult() {

		PreparedStatement ps = null;
		float totmarks = 0.0f;
		String grade = null, result = null;
		float avgmarks = 0.0f;
		int studentresult = 0;
		Scanner scanner = null;
		try {
			// getting input values from user
			scanner = new Scanner(System.in);

			System.out.println("Please Enter Your Name");
			String name = scanner.next();
			System.out.println("Please Enter Your Mark -1");
			int marks1 = scanner.nextInt();
			System.out.println("Please Enter Your Mark -2");
			int marks2 = scanner.nextInt();
			System.out.println("Please Enter Your Mark -3");
			int marks3 = scanner.nextInt();
			System.out.println("Please Enter Your Mark -4");
			int marks4 = scanner.nextInt();
			System.out.println("Please Enter Your Mark -5");
			int marks5 = scanner.nextInt();
			// load the driver and create the connection
			OurConnection.getConnection();
			// prepare query
			String INSERT_STUDENT_RESULT = "insert into student values(rno.nextval,?,?,?,?)";
			// create the PreparedStatement object
			if (con != null) {
				ps = con.prepareStatement(INSERT_STUDENT_RESULT);
			}
			// calculate total marks
			totmarks = marks1 + marks2 + marks3 + marks4 + marks5;
			// calculate average marks
			avgmarks = totmarks / 5;
			// calculate the grade
			if (avgmarks >= 60) {
				grade = "A";
			} else if (avgmarks < 60 && avgmarks >= 45) {
				grade = "B";
			} else if (avgmarks < 45 && avgmarks >= 33) {
				grade = "c";
			} else {
				grade = "NA";
			}
			// check result
			if (avgmarks >= 33) {
				result = "PASS";
			} else {
				result = "FAIL";
			}
			// set values to the pre compiled sql query (ps object)
			if (ps != null) {
				ps.setString(1, name);
				ps.setFloat(2, totmarks);
				ps.setString(3, grade);
				ps.setString(4, result);
			}
			// Execute sql query
			if (ps != null) {
				studentresult = ps.executeUpdate();
			}
			if (studentresult == 0) {
				System.out.println("Record not inserted for " + name);
			} else {
				System.out.println("Record result inserted successfully  for " + name);
			}
			// handling known exceptions
		} catch (SQLException e) {
			e.printStackTrace();
			// handling unknown exception
		} catch (Exception e) {
			e.printStackTrace();
		} // close the connection in reverse order
		finally {
			try {
				ps.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
			try {
				con.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
			try {
				scanner.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

	}// insertStudentResult()
}

